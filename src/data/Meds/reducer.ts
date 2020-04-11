import { Medication, MedsState, MedsAction } from './types';

const INITIAL_STATE: MedsState = {
  medications: {},
};

function medsReducer(state = INITIAL_STATE, action: MedsAction): MedsState {
  const { type, value } = action;

  switch (type) {
    case 'MEDS_ADD':
      return {
        medications: {
          ...state.medications,
          [value.id]: value as Medication,
        },
      };

    default:
      return state;
  }
}

export default medsReducer;
