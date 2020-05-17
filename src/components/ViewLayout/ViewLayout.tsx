import React from 'react';
import {
  Keyboard,
  StatusBar,
  StatusBarStyle,
  TouchableWithoutFeedback,
} from 'react-native';
import { useColorScheme } from 'react-native-appearance';
import { SafeAreaView } from 'react-native-safe-area-context';

import ViewHeader from '../ViewHeader';
import { ViewHeaderProps } from '../ViewHeader/ViewHeader';
import ContentWrapper from './components/ContentWrapper';
import ViewContainer, { ViewContainerProps } from './components/ViewContainer';

const ViewLayout: React.FC<ViewLayoutProps> = ({
  children,
  headerTitle,
  hideTabs,
  pastelBackground,
  scrollable,
  ...rest
}) => {
  const theme = useColorScheme();
  const statusBarColor: StatusBarStyle =
    theme === 'dark' ? 'light-content' : 'dark-content';

  /** Wraps the content in a scrollview if scrollable is requested */
  return (
    <ViewContainer pastelBackground={pastelBackground}>
      <StatusBar barStyle={statusBarColor} />
      <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          {headerTitle && <ViewHeader title={headerTitle} {...rest} />}
          <ContentWrapper scrollable={scrollable}>{children}</ContentWrapper>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ViewContainer>
  );
};

export interface ViewLayoutProps extends ViewHeaderProps, ViewContainerProps {
  /** Renders a header with a back button at the top of the view */
  headerTitle?: string;
  /** Removes the tab navigation from the view */
  hideTabs?: boolean;
  /** Makes the full screen scrollable */
  scrollable?: boolean;
}

export default ViewLayout;
