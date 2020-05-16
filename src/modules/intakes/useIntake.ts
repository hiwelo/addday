import { useSelector } from 'react-redux';

import { getIntakes } from '../../data/Intakes/selectors';
import { Intake } from '../../models/Intake';
import createIntake from './createIntake';

/**
 * Returns the scheduled intake matching the requested identifier,
 * or returns a new ScheduledIntake if none provided
 *
 * @param intakeId Unique id of the scheduled intake to return
 */
function useIntake(intakeId?: Intake['id']): Intake | undefined {
  const intakes = useSelector(getIntakes);

  return intakeId ? intakes[intakeId] : createIntake();
}

export default useIntake;
