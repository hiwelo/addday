import { ActionsUnion, MedsState } from '../types';

function medsReducer(
  state: MedsState = { medications: {} },
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
