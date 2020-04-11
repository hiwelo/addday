import { v4 as uuid } from 'uuid';

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
          [uuid()]: value as Medication,
        },
      };

    default:
      return state;
  }
}

export default medsReducer;
