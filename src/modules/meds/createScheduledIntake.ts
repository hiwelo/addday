import { ScheduledIntake } from '../../models/ScheduledIntake';

function createScheduledIntake(): ScheduledIntake {
  return {
    days: new Map()
      .set('monday', false)
      .set('tuesday', false)
      .set('wednesday', false)
      .set('thursday', false)
      .set('friday', false)
      .set('saturday', false)
      .set('sunday', false),
    id: '',
    medications: new Map(),
    moment: null,
  };
}

export default createScheduledIntake;
