import { AppState, IntakesState } from '../types';

function getIntakes(state: AppState): IntakesState {
  return state.intakes;
}

export { getIntakes };
