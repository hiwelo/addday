import React from 'react';
import { StyleSheet, StatusBar, StatusBarStyle } from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import { SafeAreaView } from 'react-native-safe-area-context';

import ScreenContainer from './components/ScreenContainer';

const Layout: React.FC = ({ children }) => {
  const theme = useColorScheme();
  const statusBarColor: StatusBarStyle =
    theme === 'dark' ? 'light-content' : 'dark-content';

  return (
    <ScreenContainer style={StyleSheet.absoluteFillObject}>
      <StatusBar barStyle={statusBarColor} />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </ScreenContainer>
  );
};

export default Layout;
