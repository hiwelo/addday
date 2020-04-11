import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import EditMedicationScreen from './EditMedicationScreen';
import MedicationDetailsScreen from './MedicationDetailsScreen';
import MedsScreen from './MedsScreen';
import NewMedicationScreen from './NewMedicationScreen';

const MedsScreens: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator>
      <Screen
        component={MedsScreen}
        name="MedsScreen"
        options={{ headerShown: false }}
      />
      <Screen
        component={MedicationDetailsScreen}
        name="MedicationDetailsScreen"
        options={{ headerShown: false }}
      />
      <Screen
        component={NewMedicationScreen}
        name="NewMedicationScreen"
        options={{ headerShown: false }}
      />
      <Screen
        component={EditMedicationScreen}
        name="EditMedicationScreen"
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default MedsScreens;
