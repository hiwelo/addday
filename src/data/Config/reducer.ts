import { ActionsUnion, ConfigState } from '../types';

function configReducer(
  state: ConfigState = {
    sentryEnrollment: false,
  },
  action: ActionsUnion,
): ConfigState {
  switch (action.type) {
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
