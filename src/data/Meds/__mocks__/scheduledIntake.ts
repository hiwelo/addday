import moment from 'moment';

import { WeeklySchedule } from '../../../models/WeeklySchedule';

export const mockedMoment = moment.utc('18:00', 'HH:mm');

const mockedWeeklySchedule: WeeklySchedule = new Map()
  .set('monday', true)
  .set('tuesday', false)
  .set('wednesday', false)
  .set('thursday', true)
  .set('friday', true)
  .set('saturday', false)
  .set('sundary', false);

export const mockedScheduledIntake = {
  days: mockedWeeklySchedule,
  id: 'testScheduledIntake',
  moment: mockedMoment,
  medications: new Map(),
};
