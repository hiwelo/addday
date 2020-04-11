import { Medication, MedsAction } from './types';

function addMedication(medication: Medication): MedsAction {
  return {
    type: 'MEDS_ADD',
    value: medication,
  };
}

export { addMedication };
