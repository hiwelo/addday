import { Medication } from './Medication';

/** Days to use for the intake definition */
type IntakeDay =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

/** Kind of intake supported */
type IntakeMode = 'interval' | 'on-demand' | 'scheduled';

export type IntakeWindow = {
  /** Days when the intake is possible */
  days: IntakeDay[];
  /** Intake timeframe end point */
  end: string;
  /** Intake timeframe start point */
  start: string;
};

export interface Prescription {
  /** Intake mode for this prescription */
  intakeMode: IntakeMode;
  /** Medication prescribed */
  medication: Medication;
  /** Windows when the medication is available */
  availability?: IntakeWindow[];
  /** Maximum number of intakes per day before displaying a warning */
  maxDailyIntake?: number;
  /** Medication strength */
  strength?: string;
}

export interface IntervalBasedPrescription extends Prescription {
  intakeMode: 'interval';
}

export interface OnDemandPrescription extends Prescription {
  intakeMode: 'on-demand';
}

export interface ScheduledPrescription extends Prescription {
  availability: undefined;
  intakeMode: 'scheduled';
  strength: undefined;
}
