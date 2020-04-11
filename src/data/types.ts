import { ConfigState } from './Config/types';
import { MedsState } from './Meds/types';
import { UserState } from './User/types';

export interface RootState {
  config: ConfigState;
  meds: MedsState;
  user: UserState;
}
