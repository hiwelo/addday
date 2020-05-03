import { useSelector } from 'react-redux';

import { AppState, MedsState } from '../../data/types';

/**
 * Returns the list of medications registered in the application
 */
function useMeds(): MedsState {
  return useSelector<AppState>(state => state.meds) as MedsState;
}

export default useMeds;
