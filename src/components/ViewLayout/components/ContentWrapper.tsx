import React from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components';

const ContentWrapper = styled(({ scrollable, ...rest }) =>
  scrollable ? <ScrollView {...rest} /> : <View {...rest} />,
)`
  flex: 1;
  padding-bottom: 40px;
  padding-left: 24px;
  padding-right: 24px;
`;

export default ContentWrapper;
