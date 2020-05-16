import moment from 'moment';

import { Intake } from '../../models/Intake';

function createIntake(): Intake {
  return {
    days: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
    id: '',
    moment: moment(),
  };
}

export default createIntake;
