import { useNavigation } from '@react-navigation/native';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';

import tabsConfig from '../../config/tabs';

const TabNavigation = ({ state }) => {
  const tabs = Object.keys(tabsConfig);
  const { navigate } = useNavigation();
  const inset = useSafeArea();

  const onSelect = (index: number) => {
    navigate(state.routeNames[index]);
  };

  return (
    <BottomNavigation
      onSelect={onSelect}
      selectedIndex={state.index}
      style={{ paddingBottom: inset.bottom + 4, paddingTop: 16 }}
    >
      {tabs.map(tab => {
        const { icon, name } = tabsConfig[tab];

        return (
          <BottomNavigationTab
            key={name}
            icon={styles => <Icon {...styles} name={icon} />}
          />
        );
      })}
    </BottomNavigation>
  );
};

export default TabNavigation;
