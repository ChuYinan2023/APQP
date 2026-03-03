import { useCallback, useRef } from 'react';
import type { AppAction, PhaseId, SimEvent } from '../types';
import { phaseAEvents, phaseBEvents, phaseCEvents } from '../mockData';

const phaseEventMap: Record<PhaseId, SimEvent[]> = {
  A: phaseAEvents,
  B: phaseBEvents,
  C: phaseCEvents,
};

export function useSimulation(dispatch: React.Dispatch<AppAction>) {
  const timerRefs = useRef<number[]>([]);
  const isPaused = useRef(false);
  const currentQueue = useRef<{ events: SimEvent[]; index: number; phaseId: PhaseId } | null>(null);

  const clearTimers = useCallback(() => {
    timerRefs.current.forEach(id => clearTimeout(id));
    timerRefs.current = [];
  }, []);

  const dispatchEvent = useCallback((event: SimEvent, phaseId: PhaseId) => {
    switch (event.type) {
      case 'show_card':
        dispatch({ type: 'SHOW_CARD', phaseId });
        dispatch({ type: 'SET_PHASE_STATUS', phaseId, status: 'active' });
        break;
      case 'add_metric':
        dispatch({ type: 'ADD_METRIC', phaseId, metric: event.metric });
        break;
      case 'add_row':
        dispatch({ type: 'ADD_ROW', phaseId, row: event.row });
        break;
      case 'add_embedded':
        dispatch({ type: 'ADD_EMBEDDED', phaseId, file: event.file });
        break;
      case 'add_template':
        dispatch({ type: 'ADD_TEMPLATE', phaseId, template: event.template });
        break;
      case 'add_missing':
        dispatch({ type: 'ADD_MISSING', phaseId, item: event.item });
        break;
      case 'add_characteristic':
        dispatch({ type: 'ADD_CHARACTERISTIC', phaseId, char: event.char });
        break;
      case 'add_exception':
        dispatch({ type: 'ADD_EXCEPTION', phaseId, item: event.item });
        break;
      case 'counter':
        dispatch({ type: 'SET_COUNTER', phaseId, field: event.field, value: event.to });
        break;
      case 'message':
        dispatch({ type: 'SET_MESSAGE', phaseId, text: event.text });
        break;
      case 'set_status':
        dispatch({ type: 'SET_PHASE_STATUS', phaseId, status: event.status });
        break;
      case 'show_confirm':
        dispatch({ type: 'SHOW_CONFIRM', phaseId });
        break;
      case 'add_artifact':
        dispatch({ type: 'ADD_ARTIFACT', artifact: event.artifact });
        break;
      case 'add_check':
        dispatch({ type: 'ADD_CHECK', check: event.check });
        break;
      case 'add_artifact_slot':
        dispatch({ type: 'ADD_ARTIFACT_SLOT', artifact: event.artifact });
        break;
    }
  }, [dispatch]);

  const startPhase = useCallback((phaseId: PhaseId) => {
    clearTimers();
    const events = phaseEventMap[phaseId];
    if (!events) return;

    currentQueue.current = { events, index: 0, phaseId };
    isPaused.current = false;

    let cumulativeDelay = 0;
    events.forEach((event, _i) => {
      cumulativeDelay += event.delay;
      const timerId = window.setTimeout(() => {
        if (!isPaused.current) {
          dispatchEvent(event, phaseId);
        }
      }, cumulativeDelay);
      timerRefs.current.push(timerId);
    });
  }, [clearTimers, dispatchEvent]);

  const pause = useCallback(() => {
    isPaused.current = true;
  }, []);

  const resume = useCallback(() => {
    isPaused.current = false;
  }, []);

  const skipToEnd = useCallback((phaseId: PhaseId) => {
    clearTimers();
    const events = phaseEventMap[phaseId];
    if (!events) return;
    events.forEach(event => dispatchEvent(event, phaseId));
  }, [clearTimers, dispatchEvent]);

  return { startPhase, pause, resume, skipToEnd };
}
