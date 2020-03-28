import React from 'react';
import { StyleSheet, StatusBar, StatusBarStyle } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import { SafeAreaView } from 'react-native-safe-area-context';

import ViewContainer from './components/ViewContainer';

const ViewLayout: React.FC = ({ children }) => {
  const theme = useColorScheme();
  const statusBarColor: StatusBarStyle =
    theme === 'dark' ? 'light-content' : 'dark-content';

  return (
    <ViewContainer style={StyleSheet.absoluteFillObject}>
      <StatusBar barStyle={statusBarColor} />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </ViewContainer>
  );
};

export default ViewLayout;
