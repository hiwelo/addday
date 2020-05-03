import { Medication } from '../models/Medication';
import { ScheduledIntake } from '../models/ScheduledIntake';

type ClearScheduledIntakesAction = {
  type: `CLEAR_SCHEDULED_INTAKES_ACTION`;
};

type DeleteScheduledIntakeAction = {
  type: `DELETE_SCHEDULED_INTAKE_ACTION`;
  payload: ScheduledIntake['id'];
};

type ResetAppAction = {
  type: `RESET_APP`;
};

type ResetUserAction = {
  type: `RESET_USER`;
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
  /** Lists all intakes scheduled for this user */
  intakes: Map<string, ScheduledIntake>;
  /** Lists all medications set in the application */
  medications: Record<string, Medication>;
}

export interface UserState {
  /** Name of the user for this instance of the application */
  firstName: string;
  /** Indicates if the user initialized the application */
  isInitialized: boolean;
}

export type ActionsUnion =
  | ClearScheduledIntakesAction
  | DeleteScheduledIntakeAction
  | ResetAppAction
  | ResetUserAction
  | SetScheduledIntakeAction
  | SetSentryEnrollmentAction
  | SetUserAction
  | UpdateMedicationAction;
