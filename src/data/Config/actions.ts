import { ActionsUnion, ConfigState } from '../types';

/**
 * Resets the current user for this application
 */
function setSentryEnrollment(
  updatedEnrollmentStatus: ConfigState['sentryEnrollment'],
): ActionsUnion {
  return {
    type: 'SENTRY_ENROLLMENT',
    payload: updatedEnrollmentStatus,
  };
}

export { setSentryEnrollment };
