/** List keys of available actions for the User reducer */
export type UserActions = 'SET_USER' | 'RESET_USER';

/** Information requested to execute an action */
export type UserAction = {
  /** Action to execute */
  type: UserActions;
  /** Information required */
  user: Partial<UserState>;
};

/** Data model for User information */
export interface UserState {
  /** Name of the user for this instance of the application */
  firstName: string;
  /** Indicates if the user initialized the application */
  isInitialized: boolean;
}
