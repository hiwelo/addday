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

    case `CLEAR_SCHEDULED_MEDICATION_INTAKES_ACTION`: {
      const scheduledIntake = state.intakes.get(action.payload);

      if (!scheduledIntake) {
        throw new Error('The requested scheduled intake was not found.');
      }

      scheduledIntake.medications.clear();

      return {
        ...state,
        intakes: state.intakes.set(scheduledIntake.id, {
          ...scheduledIntake,
        }),
      };
    }

    case `DELETE_SCHEDULED_INTAKE_ACTION`: {
      state.intakes.delete(action.payload);

      return state;
    }

    case `DELETE_SCHEDULED_MEDICATION_INTAKE_ACTION`: {
      const scheduledIntake = state.intakes.get(
        action.payload.scheduledIntakeId,
      );

      if (!scheduledIntake) {
        throw new Error('The requested scheduled intake was not found.');
      }

      scheduledIntake.medications.delete(action.payload.scheduledMedicationId);

      return {
        ...state,
        intakes: state.intakes.set(scheduledIntake.id, {
          ...scheduledIntake,
        }),
      };
    }

    case `RESET_APP`:
      return INITIAL_STATE;

    case `SET_SCHEDULED_INTAKE_ACTION`: {
      state.intakes.set(action.payload.id, action.payload);

      return { ...state };
    }

    case `SET_SCHEDULED_MEDICATION_INTAKE_ACTION`: {
      const scheduledIntake = state.intakes.get(
        action.payload.scheduledIntakeId,
      );

      if (!scheduledIntake) {
        throw new Error('The requested scheduled intake was not found.');
      }

      const providedScheduledMedicationIntake =
        action.payload.scheduledMedicationIntake;
      const updatedScheduledMedications = scheduledIntake.medications.set(
        providedScheduledMedicationIntake.medicationId,
        providedScheduledMedicationIntake,
      );

      return {
        ...state,
        intakes: state.intakes.set(scheduledIntake.id, {
          ...scheduledIntake,
          medications: updatedScheduledMedications,
        }),
      };
    }

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
