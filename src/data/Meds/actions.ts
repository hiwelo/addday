import { Medication, MedsAction } from './types';

function editMedication(medication: Medication): MedsAction {
  return {
    type: 'MEDS_UPDATE',
    value: medication,
  };
}

export { editMedication };
