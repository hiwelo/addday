import { ActionsUnion, ConfigState } from '../types';

const INITIAL_STATE: ConfigState = {
  sentryEnrollment: false,
};

function configReducer(
  state: ConfigState = INITIAL_STATE,
  action: ActionsUnion,
): ConfigState {
  switch (action.type) {
    case `RESET_APP`:
      return INITIAL_STATE;

    case 'SENTRY_ENROLLMENT':
      return {
        ...state,
        sentryEnrollment: action.payload,
      };

    default:
      return state;
  }
}

export default configReducer;
