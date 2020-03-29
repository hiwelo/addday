import React from 'react';
import { ScrollView, View } from 'react-native';

import ContainerWrapper from './components/ContainerWrapper';

const ScrollableContainer: React.FC = ({ children }) => (
  <ContainerWrapper>
    <View>
      <ScrollView>{children}</ScrollView>
    </View>
  </ContainerWrapper>
);

export default ScrollableContainer;
