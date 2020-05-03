import { Medication } from '../../models/Medication';
import { ActionsUnion } from '../types';

export function editMedication(medication: Medication): ActionsUnion {
  return {
    type: 'UPDATE_MEDICATION',
    payload: medication,
  };
}
