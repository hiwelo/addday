import { Map } from 'immutable';

import { Intake } from '../models/Intake';
import { Medication } from '../models/Medication';

type ClearIntakesAction = {
  type: `CLEAR_INTAKES_ACTION`;
};

type DeleteIntakeAction = {
  type: `DELETE_INTAKE_ACTION`;
  payload: Intake['id'];
};

type ResetAppAction = {
  type: `RESET_APP`;
};

type ResetUserAction = {
  type: `RESET_USER`;
};

type SetIntakeAction = {
  type: `SET_INTAKE_ACTION`;
  payload: Intake;
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
  intakes: IntakesState;
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

export type IntakesState = Map<Intake['id'], Intake>;

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
  | ClearIntakesAction
  | DeleteIntakeAction
  | ResetAppAction
  | ResetUserAction
  | SetIntakeAction
  | SetSentryEnrollmentAction
  | SetUserAction
  | UpdateMedicationAction;
