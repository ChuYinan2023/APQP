import { useReducer, useCallback, useEffect } from 'react';
import type { AppState, AppAction, PhaseId, PhaseState } from './types';
import { projects } from './mockData';
import { useSimulation } from './hooks/useSimulation';
import LeftPanel from './components/LeftPanel';
import CenterPanel from './components/CenterPanel';
import RightPanel from './components/RightPanel';

function createEmptyPhase(id: PhaseId, label: string): PhaseState {
  return {
    id, label,
    status: 'locked',
    showConfirm: false,
    metrics: [],
    files: [],
    embeddedFiles: [],
    customerTemplates: [],
    missingItems: [],
    missingCount: 0,
    characteristics: [],
    ccCount: 0,
    scCount: 0,
    exceptions: [],
    approvedCount: 0,
    rejectedCount: 0,
    pendingCount: 0,
    statusMessage: '',
    artifactSlots: [],
    consistencyChecks: [],
    visible: false,
  };
}

const initialState: AppState = {
  selectedProjectId: null,
  phases: {
    A: createEmptyPhase('A', '文件发现'),
    B: createEmptyPhase('B', '规范解析'),
    C: createEmptyPhase('C', '产出物生成'),
  },
  artifacts: [],
  leftCollapsed: false,
  rightCollapsed: false,
  simulationRunning: false,
  currentPhase: null,
};

function updatePhase(state: AppState, phaseId: PhaseId, update: Partial<PhaseState>): AppState {
  return {
    ...state,
    phases: {
      ...state.phases,
      [phaseId]: { ...state.phases[phaseId], ...update },
    },
  };
}

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SELECT_PROJECT':
      return {
        ...initialState,
        selectedProjectId: action.projectId,
        leftCollapsed: state.leftCollapsed,
        rightCollapsed: state.rightCollapsed,
      };

    case 'START_PHASE':
      return {
        ...updatePhase(state, action.phaseId, { status: 'active', visible: true }),
        simulationRunning: true,
        currentPhase: action.phaseId,
      };

    case 'SHOW_CARD':
      return updatePhase(state, action.phaseId, { visible: true });

    case 'ADD_METRIC':
      return updatePhase(state, action.phaseId, {
        metrics: [...state.phases[action.phaseId].metrics, action.metric],
      });

    case 'ADD_ROW':
      return updatePhase(state, action.phaseId, {
        files: [...state.phases[action.phaseId].files, action.row],
      });

    case 'ADD_EMBEDDED':
      return updatePhase(state, action.phaseId, {
        embeddedFiles: [...state.phases[action.phaseId].embeddedFiles, action.file],
      });

    case 'ADD_TEMPLATE':
      return updatePhase(state, action.phaseId, {
        customerTemplates: [...state.phases[action.phaseId].customerTemplates, action.template],
      });

    case 'ADD_MISSING':
      return updatePhase(state, action.phaseId, {
        missingItems: [...state.phases[action.phaseId].missingItems, action.item],
      });

    case 'ADD_CHARACTERISTIC':
      return updatePhase(state, action.phaseId, {
        characteristics: [...state.phases[action.phaseId].characteristics, action.char],
      });

    case 'ADD_EXCEPTION':
      return updatePhase(state, action.phaseId, {
        exceptions: [...state.phases[action.phaseId].exceptions, action.item],
      });

    case 'SET_COUNTER': {
      const field = action.field as keyof PhaseState;
      return updatePhase(state, action.phaseId, { [field]: action.value } as Partial<PhaseState>);
    }

    case 'SET_MESSAGE':
      return updatePhase(state, action.phaseId, { statusMessage: action.text });

    case 'SET_PHASE_STATUS':
      return updatePhase(state, action.phaseId, { status: action.status });

    case 'SHOW_CONFIRM':
      return {
        ...updatePhase(state, action.phaseId, { showConfirm: true }),
        simulationRunning: false,
      };

    case 'CONFIRM_PHASE': {
      const nextPhase: Record<PhaseId, PhaseId | null> = { A: 'B', B: 'C', C: null };
      const next = nextPhase[action.phaseId];
      let newState = updatePhase(state, action.phaseId, { showConfirm: false });
      if (next) {
        newState = updatePhase(newState, next, { status: 'active', visible: true });
        newState = { ...newState, currentPhase: next, simulationRunning: true };
      }
      return newState;
    }

    case 'ADD_ARTIFACT': {
      const existing = state.artifacts.findIndex(a => a.id === action.artifact.id);
      const newArtifacts = [...state.artifacts];
      if (existing >= 0) {
        newArtifacts[existing] = action.artifact;
      } else {
        newArtifacts.push(action.artifact);
      }
      // Also update artifact slots in Phase C
      const slots = [...state.phases.C.artifactSlots];
      const slotIdx = slots.findIndex(s => s.id === action.artifact.id);
      if (slotIdx >= 0) {
        slots[slotIdx] = action.artifact;
      }
      return {
        ...state,
        artifacts: newArtifacts,
        phases: {
          ...state.phases,
          C: { ...state.phases.C, artifactSlots: slots },
        },
      };
    }

    case 'ADD_ARTIFACT_SLOT':
      return updatePhase(state, 'C', {
        artifactSlots: [...state.phases.C.artifactSlots, action.artifact],
      });

    case 'UPDATE_ARTIFACT_STATUS': {
      const arts = state.artifacts.map(a =>
        a.id === action.artifactId ? { ...a, status: action.status } : a
      );
      return { ...state, artifacts: arts };
    }

    case 'ADD_CHECK':
      return updatePhase(state, 'C', {
        consistencyChecks: [...state.phases.C.consistencyChecks, action.check],
      });

    case 'TOGGLE_LEFT':
      return { ...state, leftCollapsed: !state.leftCollapsed };

    case 'TOGGLE_RIGHT':
      return { ...state, rightCollapsed: !state.rightCollapsed };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { startPhase } = useSimulation(dispatch);

  const handleSelectProject = useCallback((id: string) => {
    dispatch({ type: 'SELECT_PROJECT', projectId: id });
    // Auto-start Phase A after selection
    setTimeout(() => {
      dispatch({ type: 'START_PHASE', phaseId: 'A' });
      startPhase('A');
    }, 400);
  }, [startPhase]);

  // Responsive: collapse panels on smaller screens (mount only)
  useEffect(() => {
    const w = window.innerWidth;
    if (w < 768) {
      // collapse both
      if (!state.leftCollapsed) dispatch({ type: 'TOGGLE_LEFT' });
      if (!state.rightCollapsed) dispatch({ type: 'TOGGLE_RIGHT' });
    } else if (w < 1024) {
      if (!state.rightCollapsed) dispatch({ type: 'TOGGLE_RIGHT' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleConfirmPhase = useCallback((phaseId: PhaseId) => {
    dispatch({ type: 'CONFIRM_PHASE', phaseId });
    const nextPhase: Record<PhaseId, PhaseId | null> = { A: 'B', B: 'C', C: null };
    const next = nextPhase[phaseId];
    if (next) {
      setTimeout(() => startPhase(next), 300);
    }
  }, [startPhase]);

  const selectedProject = projects.find(p => p.id === state.selectedProjectId);

  return (
    <div className="h-screen flex flex-col bg-navy-deep text-gray-200 overflow-hidden">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-navy-deep">
        <div className="flex items-center gap-3">
          {state.leftCollapsed && (
            <button
              onClick={() => dispatch({ type: 'TOGGLE_LEFT' })}
              className="text-gray-500 hover:text-gold text-sm transition-colors"
            >
              ☰
            </button>
          )}
          <span className="text-gold font-bold text-sm">◆ APQP</span>
          <span className="text-gray-600 text-xs">Quotation Tool v2</span>
        </div>
        <div className="flex items-center gap-2">
          {selectedProject && (
            <span className="text-xs text-gray-500">
              {selectedProject.oem} · {selectedProject.partNumber}
            </span>
          )}
          {state.rightCollapsed && (
            <button
              onClick={() => dispatch({ type: 'TOGGLE_RIGHT' })}
              className="text-gray-500 hover:text-gold text-sm transition-colors ml-2"
            >
              📁
            </button>
          )}
        </div>
      </header>

      {/* Three-column layout */}
      <div className="flex-1 flex overflow-hidden">
        <LeftPanel
          projects={projects}
          selectedId={state.selectedProjectId}
          onSelect={handleSelectProject}
          collapsed={state.leftCollapsed}
          onToggle={() => dispatch({ type: 'TOGGLE_LEFT' })}
        />
        <CenterPanel
          phases={state.phases}
          onConfirm={handleConfirmPhase}
          projectName={selectedProject?.name ?? null}
        />
        <RightPanel
          artifacts={state.artifacts}
          collapsed={state.rightCollapsed}
          onToggle={() => dispatch({ type: 'TOGGLE_RIGHT' })}
        />
      </div>
    </div>
  );
}
