import { UserState, UserAction } from './types';

/**
 * Resets the current user for this application
 */
function resetUser(): UserAction {
  return {
    type: 'RESET_USER',
    user: {},
  };
}

/**
 * Sets a set of new information for the current user
 *
 * @param newInformation New information to add in the UserState
 */
function setUser(newInformation: Partial<UserState>): UserAction {
  return {
    type: 'SET_USER',
    user: newInformation,
  };
}

export { resetUser, setUser };
