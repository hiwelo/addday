import { ActionsUnion, MedsState } from '../types';

const INITIAL_STATE: MedsState = {
  medications: {},
};

function medsReducer(
  state: MedsState = INITIAL_STATE,
  action: ActionsUnion,
): MedsState {
  switch (action.type) {
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
