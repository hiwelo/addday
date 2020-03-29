/** List keys of available actions for the User reducer */
export type EncryptionActions = 'GET_KEY' | 'SET_KEY';

type Key = string | null;

/** Information requested to execute an action */
export type EncryptionAction = {
  /** Action to execute */
  type: EncryptionActions;

  /** Key to use for this specific action */
  key?: Key;
};

/** Data model for User information */
export interface EncryptionState {
  /** Key used for the encrypted store */
  key: Key;
}
