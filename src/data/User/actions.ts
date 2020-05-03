import { ActionsUnion, UserState } from '../types';

/**
 * Resets the current user for this application
 */
function resetUser(): ActionsUnion {
  return {
    type: 'RESET_USER',
  };
}

/**
 * Sets a set of new information for the current user
 *
 * @param newInformation New information to add in the UserState
 */
function setUser(updatedInfo: Partial<UserState>): ActionsUnion {
  return {
    type: 'SET_USER',
    payload: updatedInfo,
  };
}

export { resetUser, setUser };
