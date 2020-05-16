import { Moment } from 'moment';

import { WeeklySchedule } from './WeeklySchedule';

export interface Intake {
  /** Days of the week */
  days: WeeklySchedule;
  /** Moment of the day to trigger the intake */
  moment: Moment;
  /** Unique Identifier for the scheduled intake */
  id: string;
}
