// === Core Types ===

export type PhaseId = 'A' | 'B' | 'C';
export type StepStatus = 'locked' | 'pending' | 'active' | 'done';
export type ArtifactStatus = 'pending' | 'generating' | 'ready';

export interface Project {
  id: string;
  name: string;
  oem: string;
  component: string;
  partNumber: string;
  fileCount: number;
  date: string;
  isDemo: boolean; // only KP1 has full data
}

// === Metrics & Table Rows ===

export interface Metric {
  icon: string;
  label: string;
  value: string | number;
  color?: 'gold' | 'blue' | 'green' | 'red' | 'amber' | 'gray';
}

export interface FileRow {
  name: string;
  type: string;
  pages: number;
  size: string;
}

export interface EmbeddedFile {
  name: string;
  source: string;
  layer: number;
}

export interface MissingItem {
  id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
}

export interface Characteristic {
  id: string;
  name: string;
  type: 'CC' | 'SC';
  spec: string;
}

export interface ExceptionItem {
  id: string;
  name: string;
  status: 'approved' | 'rejected' | 'pending';
}

// === Phase Step Content ===

export interface PhaseAContent {
  metrics: Metric[];
  files: FileRow[];
  embeddedFiles: EmbeddedFile[];
  customerTemplates: string[];
  statusMessages: string[];
}

export interface PhaseBContent {
  b1: {
    missingCount: number;
    items: MissingItem[];
    statusMessages: string[];
  };
  b2: {
    ccCount: number;
    scCount: number;
    characteristics: Characteristic[];
    statusMessages: string[];
  };
  b3: {
    approved: number;
    rejected: number;
    pending: number;
    items: ExceptionItem[];
    statusMessages: string[];
  };
}

export interface PhaseCContent {
  artifacts: Artifact[];
  consistencyChecks: ConsistencyCheck[];
  statusMessages: string[];
}

export interface ConsistencyCheck {
  id: string;
  name: string;
  passed: boolean;
}

// === Artifact ===

export interface Artifact {
  id: string;
  name: string;
  category: 'cost' | 'plan' | 'team' | 'quality' | 'spec' | 'report';
  fileType: 'xlsx' | 'md' | 'pdf' | 'docx';
  status: ArtifactStatus;
  keyStats?: string;
}

// === Simulation Events ===

export type SimEvent =
  | { type: 'show_card'; stepId: string; delay: number }
  | { type: 'add_metric'; stepId: string; metric: Metric; delay: number }
  | { type: 'add_row'; stepId: string; row: FileRow; delay: number }
  | { type: 'add_embedded'; stepId: string; file: EmbeddedFile; delay: number }
  | { type: 'add_template'; stepId: string; template: string; delay: number }
  | { type: 'add_missing'; stepId: string; item: MissingItem; delay: number }
  | { type: 'add_characteristic'; stepId: string; char: Characteristic; delay: number }
  | { type: 'add_exception'; stepId: string; item: ExceptionItem; delay: number }
  | { type: 'counter'; stepId: string; field: string; from: number; to: number; delay: number }
  | { type: 'message'; stepId: string; text: string; delay: number }
  | { type: 'set_status'; stepId: string; status: StepStatus; delay: number }
  | { type: 'add_artifact'; artifact: Artifact; delay: number }
  | { type: 'add_check'; check: ConsistencyCheck; delay: number }
  | { type: 'show_confirm'; stepId: string; delay: number }
  | { type: 'add_artifact_slot'; artifact: Artifact; delay: number };

// === App State ===

export interface PhaseState {
  id: PhaseId;
  label: string;
  status: StepStatus;
  showConfirm: boolean;
  metrics: Metric[];
  files: FileRow[];
  embeddedFiles: EmbeddedFile[];
  customerTemplates: string[];
  missingItems: MissingItem[];
  missingCount: number;
  characteristics: Characteristic[];
  ccCount: number;
  scCount: number;
  exceptions: ExceptionItem[];
  approvedCount: number;
  rejectedCount: number;
  pendingCount: number;
  statusMessage: string;
  artifactSlots: Artifact[];
  consistencyChecks: ConsistencyCheck[];
  visible: boolean;
}

export interface AppState {
  selectedProjectId: string | null;
  phases: Record<PhaseId, PhaseState>;
  artifacts: Artifact[];
  leftCollapsed: boolean;
  rightCollapsed: boolean;
  simulationRunning: boolean;
  currentPhase: PhaseId | null;
}

export type AppAction =
  | { type: 'SELECT_PROJECT'; projectId: string }
  | { type: 'START_PHASE'; phaseId: PhaseId }
  | { type: 'SHOW_CARD'; phaseId: PhaseId }
  | { type: 'ADD_METRIC'; phaseId: PhaseId; metric: Metric }
  | { type: 'ADD_ROW'; phaseId: PhaseId; row: FileRow }
  | { type: 'ADD_EMBEDDED'; phaseId: PhaseId; file: EmbeddedFile }
  | { type: 'ADD_TEMPLATE'; phaseId: PhaseId; template: string }
  | { type: 'ADD_MISSING'; phaseId: PhaseId; item: MissingItem }
  | { type: 'ADD_CHARACTERISTIC'; phaseId: PhaseId; char: Characteristic }
  | { type: 'ADD_EXCEPTION'; phaseId: PhaseId; item: ExceptionItem }
  | { type: 'SET_COUNTER'; phaseId: PhaseId; field: string; value: number }
  | { type: 'SET_MESSAGE'; phaseId: PhaseId; text: string }
  | { type: 'SET_PHASE_STATUS'; phaseId: PhaseId; status: StepStatus }
  | { type: 'SHOW_CONFIRM'; phaseId: PhaseId }
  | { type: 'CONFIRM_PHASE'; phaseId: PhaseId }
  | { type: 'ADD_ARTIFACT'; artifact: Artifact }
  | { type: 'UPDATE_ARTIFACT_STATUS'; artifactId: string; status: ArtifactStatus }
  | { type: 'ADD_CHECK'; check: ConsistencyCheck }
  | { type: 'ADD_ARTIFACT_SLOT'; artifact: Artifact }
  | { type: 'TOGGLE_LEFT' }
  | { type: 'TOGGLE_RIGHT' }
  | { type: 'RESET' };
