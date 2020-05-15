import { ActionsUnion, ScheduledIntakeState } from '../types';

const INITIAL_STATE: ScheduledIntakeState = {};

function scheduledIntakeReducer(
  state: ScheduledIntakeState = INITIAL_STATE,
  action: ActionsUnion,
): ScheduledIntakeState {
  switch (action.type) {
    case `CLEAR_SCHEDULED_INTAKES_ACTION`:
    case `RESET_APP`:
      return INITIAL_STATE;

    case `CLEAR_SCHEDULED_MEDICATION_INTAKES_ACTION`: {
      const scheduledIntake = state[action.payload];

      if (!scheduledIntake) {
        throw new Error('The requested scheduled intake was not found.');
      }

      return {
        ...state,
        [scheduledIntake.id]: {
          ...scheduledIntake,
          medications: {},
        },
      };
    }

    case `DELETE_SCHEDULED_INTAKE_ACTION`: {
      delete state[action.payload];

      return state;
    }

    case `DELETE_SCHEDULED_MEDICATION_INTAKE_ACTION`: {
      const scheduledIntake = state[action.payload.scheduledIntakeId];

      if (!scheduledIntake) {
        throw new Error('The requested scheduled intake was not found.');
      }

      delete scheduledIntake.medications[action.payload.scheduledMedicationId];

      return {
        ...state,
        [scheduledIntake.id]: scheduledIntake,
      };
    }

    case `SET_SCHEDULED_INTAKE_ACTION`:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };

    case `SET_SCHEDULED_MEDICATION_INTAKE_ACTION`: {
      const scheduledIntake = state[action.payload.scheduledIntakeId];

      if (!scheduledIntake) {
        throw new Error('The requested scheduled intake was not found.');
      }

      return {
        ...state,
        [scheduledIntake.id]: {
          ...scheduledIntake,
          medications: {
            ...scheduledIntake.medications,
            [action.payload.scheduledMedicationIntake.medicationId]:
              action.payload.scheduledMedicationIntake,
          },
        },
      };
    }

    default:
      return state;
  }
}

export default scheduledIntakeReducer;
