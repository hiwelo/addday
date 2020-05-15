import {
  ScheduledIntake,
  ScheduledMedication,
} from '../../models/ScheduledIntake';
import { ActionsUnion } from '../types';

export function clearScheduledIntakes(): ActionsUnion {
  return {
    type: `CLEAR_SCHEDULED_INTAKES_ACTION`,
  };
}

export function clearScheduledMedicationIntakes(
  scheduledIntakeId: ScheduledIntake['id'],
): ActionsUnion {
  return {
    type: `CLEAR_SCHEDULED_MEDICATION_INTAKES_ACTION`,
    payload: scheduledIntakeId,
  };
}

export function deleteScheduledIntake(
  scheduledIntakeId: ScheduledIntake['id'],
): ActionsUnion {
  return {
    type: `DELETE_SCHEDULED_INTAKE_ACTION`,
    payload: scheduledIntakeId,
  };
}

export function deleteScheduledMedicationIntake(
  scheduledIntakeId: ScheduledIntake['id'],
  scheduledMedicationId: ScheduledMedication['medicationId'],
): ActionsUnion {
  return {
    type: `DELETE_SCHEDULED_MEDICATION_INTAKE_ACTION`,
    payload: {
      scheduledIntakeId,
      scheduledMedicationId,
    },
  };
}

export function setScheduledIntake(
  scheduledIntake: ScheduledIntake,
): ActionsUnion {
  return {
    type: `SET_SCHEDULED_INTAKE_ACTION`,
    payload: scheduledIntake,
  };
}

export function setScheduledMedicationIntake(
  scheduledIntakeId: ScheduledIntake['id'],
  scheduledMedicationIntake: ScheduledMedication,
): ActionsUnion {
  return {
    type: `SET_SCHEDULED_MEDICATION_INTAKE_ACTION`,
    payload: {
      scheduledIntakeId,
      scheduledMedicationIntake,
    },
  };
}
