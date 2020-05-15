import moment from 'moment';

import { ScheduledIntake } from '../../models/ScheduledIntake';

function createScheduledIntake(): ScheduledIntake {
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
    medications: {},
    moment: moment(),
  };
}

export default createScheduledIntake;
