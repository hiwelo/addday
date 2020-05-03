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
    medications: new Map(),
    moment: null,
  };
}

export default createScheduledIntake;
