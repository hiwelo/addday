import { AppState, MedsState } from '../types';

function getScheduledIntakes(state: AppState): MedsState['intakes'] {
  return state.meds.intakes;
}

export { getScheduledIntakes };
