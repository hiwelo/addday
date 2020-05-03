import { useSelector } from 'react-redux';

import { getScheduledIntakes } from '../../data/Meds/selectors';
import { ScheduledIntake } from '../../models/ScheduledIntake';
import createScheduledIntake from './createScheduledIntake';

/**
 * Returns the scheduled intake matching the requested identifier,
 * or returns a new ScheduledIntake if none provided
 *
 * @param scheduledIntakeId Unique id of the scheduled intake to return
 */
function useScheduledIntake(
  scheduledIntakeId?: ScheduledIntake['id'],
): ScheduledIntake | undefined {
  const intakes = useSelector(getScheduledIntakes);

  return scheduledIntakeId
    ? intakes.get(scheduledIntakeId)
    : createScheduledIntake();
}

export default useScheduledIntake;
