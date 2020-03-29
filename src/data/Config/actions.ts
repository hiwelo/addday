import { ConfigAction } from './types';

/**
 * Resets the current user for this application
 */
function setSentryEnrollment(updatedEnrollmentStatus: boolean): ConfigAction {
  return {
    type: 'SENTRY_ENROLLMENT',
    value: {
      sentryEnrollment: updatedEnrollmentStatus,
    },
  };
}

export { setSentryEnrollment };
