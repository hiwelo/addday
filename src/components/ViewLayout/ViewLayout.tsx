import React from 'react';
import {
  Keyboard,
  StatusBar,
  StatusBarStyle,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import { SafeAreaView } from 'react-native-safe-area-context';

import ViewContainer from './components/ViewContainer';

const ViewLayout: React.FC<ViewLayoutProps> = ({ children, scrollable }) => {
  const theme = useColorScheme();
  const statusBarColor: StatusBarStyle =
    theme === 'dark' ? 'light-content' : 'dark-content';

  /** Wraps the content in a scrollview if scrollable is requested */
  const ContentWrapper = scrollable ? ScrollView : React.Fragment;

  return (
    <ViewContainer>
      <StatusBar barStyle={statusBarColor} />
      <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          <ContentWrapper>{children}</ContentWrapper>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ViewContainer>
  );
};

export interface ViewLayoutProps {
  /** Makes the full screen scrollable */
  scrollable?: boolean;
}

export default ViewLayout;
