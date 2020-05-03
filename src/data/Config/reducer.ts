import { ActionsUnion, ConfigState } from '../types';

function configReducer(
  state: ConfigState = {
    sentryEnrollment: false,
  },
  action: ActionsUnion,
): ConfigState {
  const { type, payload } = action;

  switch (type) {
    case 'SENTRY_ENROLLMENT':
      return {
        ...state,
        sentryEnrollment: payload,
      };

    default:
      return state;
  }
}

export default configReducer;
