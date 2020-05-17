import React from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components';

const ContentWrapper = styled(({ scrollable, ...rest }) =>
  scrollable ? <ScrollView {...rest} /> : <View {...rest} />,
)`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
`;

export default ContentWrapper;
