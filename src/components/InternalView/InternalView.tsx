import React from 'react';

import StyledView from './components/StyledView';

const InternalView: React.FC = ({ children }) => (
  <StyledView>{children}</StyledView>
);

export default InternalView;
