import { MedsState } from './Meds/types';
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

export type ActionsUnion =
  | GetEncryptionKeyAction
  | SetEncryptionKeyAction
  | SetSentryEnrollmentAction;

export type RootState = AppState;
