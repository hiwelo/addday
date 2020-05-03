import { Medication } from '../models/Medication';
import { UserState } from './User/types';

type GetEncryptionKeyAction = {
  type: `GET_ENCRYPTION_KEY`;
};

type SetEncryptionKeyAction = {
  type: `SET_ENCRYPTION_KEY`;
  payload: EncryptionState['key'];
};

type SetSentryEnrollmentAction = {
  type: `SENTRY_ENROLLMENT`;
  payload: ConfigState['sentryEnrollment'];
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

export type ActionsUnion =
  | GetEncryptionKeyAction
  | SetEncryptionKeyAction
  | SetSentryEnrollmentAction
  | UpdateMedicationAction;

export type RootState = AppState;
