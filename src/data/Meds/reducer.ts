import { ActionsUnion, MedsState } from '../types';

const INITIAL_STATE: MedsState = {
  intakes: new Map(),
  medications: {},
};

function medsReducer(
  state: MedsState = INITIAL_STATE,
  action: ActionsUnion,
): MedsState {
  switch (action.type) {
    case `CLEAR_SCHEDULED_INTAKES_ACTION`: {
      state.intakes.clear();

      return state;
    }

    case `DELETE_SCHEDULED_INTAKE_ACTION`: {
      state.intakes.delete(action.payload);

      return state;
    }

    case `RESET_APP`:
      return INITIAL_STATE;

    case `SET_SCHEDULED_INTAKE_ACTION`:
      return {
        ...state,
        intakes: state.intakes.set(action.payload.id, action.payload),
      };

    case 'UPDATE_MEDICATION':
      return {
        ...state,
        medications: {
          ...state.medications,
          [action.payload.id]: action.payload,
        },
      };

    default:
      return state;
  }
}

export default medsReducer;
