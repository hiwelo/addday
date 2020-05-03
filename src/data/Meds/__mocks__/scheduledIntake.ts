import moment from 'moment';

import { WeeklySchedule } from '../../../models/WeeklySchedule';

export const mockedMoment = moment.utc('18:00', 'HH:mm');

export const mockedWeeklySchedule: WeeklySchedule = {
  monday: true,
  tuesday: false,
  wednesday: false,
  thursday: true,
  friday: true,
  saturday: false,
  sunday: false,
};

export const mockedScheduledIntake = {
  days: mockedWeeklySchedule,
  id: 'testScheduledIntake',
  moment: mockedMoment,
  medications: new Map(),
};
