import { ActionsUnion, ConfigState } from '../types';

function resetApplication(): ActionsUnion {
  return {
    type: `RESET_APP`,
  };
}

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

export { resetApplication, setSentryEnrollment };
