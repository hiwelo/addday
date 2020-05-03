import { MedsState } from './Meds/types';
import { UserState } from './User/types';

export interface AppState {
  config: ConfigState;
  meds: MedsState;
  user: UserState;
}

export type RootState = AppState;

export interface ConfigState {
  /** Indicates if the user enrolled for Sentry */
  sentryEnrollment: boolean;
}

export type ActionsUnion = SetSentryEnrollmentAction;

export type SetSentryEnrollmentAction = {
  type: `SENTRY_ENROLLMENT`;
  payload: ConfigState['sentryEnrollment'];
};
