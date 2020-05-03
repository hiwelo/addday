import { Medication } from '../../models/Medication';
import { ScheduledIntake } from '../../models/ScheduledIntake';
import { ActionsUnion } from '../types';

export function clearScheduledIntakes(): ActionsUnion {
  return {
    type: `CLEAR_SCHEDULED_INTAKES_ACTION`,
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

export function setScheduledIntake(
  scheduledIntake: ScheduledIntake,
): ActionsUnion {
  return {
    type: `SET_SCHEDULED_INTAKE_ACTION`,
    payload: scheduledIntake,
  };
}

export function editMedication(medication: Medication): ActionsUnion {
  return {
    type: 'UPDATE_MEDICATION',
    payload: medication,
  };
}
