import { AppState, ScheduledIntakeState } from '../types';

function getScheduledIntakes(state: AppState): ScheduledIntakeState {
  return state.intakes;
}

export { getScheduledIntakes };
