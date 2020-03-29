/** List keys of available actions for the User reducer */
export type ConfigActions = 'SENTRY_ENROLLMENT';

/** Information requested to execute an action */
export type ConfigAction = {
  /** Action to execute */
  type: ConfigActions;
  /** Information required */
  value: Partial<ConfigState>;
};

/** Data model for User information */
export interface ConfigState {
  /** Indicates if the user enrolled for Sentry */
  sentryEnrollment: boolean;
}
