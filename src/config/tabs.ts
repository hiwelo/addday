import { FunctionComponent } from 'react';

import ActivitiesScreens from '../views/InApp/Activities';
import CalendarScreens from '../views/InApp/Calendar';
import DashboardScreens from '../views/InApp/Dashboard';
import MedsScreens from '../views/InApp/Meds';
import SettingsScreens from '../views/InApp/Settings';

const tabsConfig: AppTabs = {
  meds: {
    component: MedsScreens,
    icon: 'close-circle-outline',
    name: 'MedsScreens',
  },
  calendar: {
    component: CalendarScreens,
    icon: 'calendar-outline',
    name: 'CalendarScreens',
  },
  dashboard: {
    component: DashboardScreens,
    icon: 'compass',
    name: 'DashboardScreens',
  },
  activity: {
    component: ActivitiesScreens,
    icon: 'activity-outline',
    name: 'ActivitiesScreens',
  },
  settings: {
    component: SettingsScreens,
    icon: 'settings-outline',
    name: 'SettingsScreens',
  },
};

type AppTabs = Record<
  string,
  {
    /** Component containing the view */
    component: FunctionComponent;
    /** Icon to render */
    icon: string;
    /** Name of the screen used to identify it */
    name: string;
  }
>;

export default tabsConfig;
