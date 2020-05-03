import { Medication } from '../models/Medication';

type ResetUserAction = {
  type: `RESET_USER`;
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
  | ResetUserAction
  | SetSentryEnrollmentAction
  | SetUserAction
  | UpdateMedicationAction;
