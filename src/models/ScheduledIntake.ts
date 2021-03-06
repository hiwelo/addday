import { Moment } from 'moment';

import { Medication } from './Medication';
import { WeeklySchedule } from './WeeklySchedule';

export interface ScheduledIntake {
  /** Days of the week */
  days: WeeklySchedule;
  /** Moment of the day to trigger the intake */
  moment: Moment;
  /** Unique Identifier for the scheduled intake */
  id: string;
  /** Lists medications to take during this intake moment */
  medications: Record<Medication['id'], ScheduledMedication>;
}

export type ScheduledMedication = {
  /** Medication to take */
  medicationId: Medication['id'];
  /** Units to take as part of this scheduled intake */
  units: number;
};
