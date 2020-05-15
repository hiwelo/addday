import { Medication } from '../models/Medication';
import {
  ScheduledIntake,
  ScheduledMedication,
} from '../models/ScheduledIntake';

type ClearScheduledIntakesAction = {
  type: `CLEAR_SCHEDULED_INTAKES_ACTION`;
};

type ClearScheduledMedicationIntakeAction = {
  type: `CLEAR_SCHEDULED_MEDICATION_INTAKES_ACTION`;
  payload: ScheduledIntake['id'];
};

type DeleteScheduledIntakeAction = {
  type: `DELETE_SCHEDULED_INTAKE_ACTION`;
  payload: ScheduledIntake['id'];
};

type DeleteScheduledMedicationIntakeAction = {
  type: `DELETE_SCHEDULED_MEDICATION_INTAKE_ACTION`;
  payload: {
    scheduledIntakeId: ScheduledIntake['id'];
    scheduledMedicationId: Medication['id'];
  };
};

type ResetAppAction = {
  type: `RESET_APP`;
};

type ResetUserAction = {
  type: `RESET_USER`;
};

type SetScheduledMedicationIntakeAction = {
  type: `SET_SCHEDULED_MEDICATION_INTAKE_ACTION`;
  payload: {
    scheduledIntakeId: ScheduledIntake['id'];
    scheduledMedicationIntake: ScheduledMedication;
  };
};

type SetScheduledIntakeAction = {
  type: `SET_SCHEDULED_INTAKE_ACTION`;
  payload: ScheduledIntake;
};

type SetSentryEnrollmentAction = {
  type: `SENTRY_ENROLLMENT`;
  payload: ConfigState['sentryEnrollment'];
};

type SetUserAction = {
  type: `SET_USER`;
  payload: Partial<UserState>;
};

type UpdateMedicationAction = {
  type: `UPDATE_MEDICATION`;
  payload: Medication;
};

export interface AppState {
  config: ConfigState;
  intakes: ScheduledIntakeState;
  meds: MedsState;
  user: UserState;
}

export interface ConfigState {
  /** Indicates if the user enrolled for Sentry */
  sentryEnrollment: boolean;
}

export interface EncryptionState {
  /** Key used for the encrypted store */
  key: string | null;
}

export interface MedsState {
  /** Lists all medications set in the application */
  medications: Record<string, Medication>;
}

export type ScheduledIntakeState = Record<string, ScheduledIntake>;

export interface UserState {
  /** Name of the user for this instance of the application */
  firstName: string;
  /** Indicates if the user initialized the application */
  isInitialized: boolean;
}

export type ActionsUnion =
  | ClearScheduledIntakesAction
  | ClearScheduledMedicationIntakeAction
  | DeleteScheduledIntakeAction
  | DeleteScheduledMedicationIntakeAction
  | ResetAppAction
  | ResetUserAction
  | SetScheduledIntakeAction
  | SetScheduledMedicationIntakeAction
  | SetSentryEnrollmentAction
  | SetUserAction
  | UpdateMedicationAction;
