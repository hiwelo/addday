import { useSelector } from 'react-redux';

import { MedsState } from '../../data/Meds/types';
import { RootState } from '../../data/types';

/**
 * Returns the list of medications registered in the application
 */
function useMeds(): MedsState {
  return useSelector<RootState>(state => state.meds) as MedsState;
}

export default useMeds;
