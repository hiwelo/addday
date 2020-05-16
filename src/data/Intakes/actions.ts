import { Intake } from '../../models/Intake';
import { ActionsUnion } from '../types';

export function clearIntakes(): ActionsUnion {
  return {
    type: `CLEAR_INTAKES_ACTION`,
  };
}

export function deleteIntake(intakeId: Intake['id']): ActionsUnion {
  return {
    type: `DELETE_INTAKE_ACTION`,
    payload: intakeId,
  };
}

export function setIntake(intake: Intake): ActionsUnion {
  return {
    type: `SET_INTAKE_ACTION`,
    payload: intake,
  };
}
