import { ConfigState, ConfigAction } from './types';

const INITIAL_STATE: ConfigState = {
  sentryEnrollment: false,
};

function configReducer(
  state = INITIAL_STATE,
  action: ConfigAction,
): ConfigState {
  const { type, value } = action;

  switch (type) {
    case 'SENTRY_ENROLLMENT':
      return {
        ...state,
        sentryEnrollment: value.sentryEnrollment,
      };

    default:
      return state;
  }
}

export default configReducer;
