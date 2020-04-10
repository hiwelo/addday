import { TopNavigation, TopNavigationProps } from '@ui-kitten/components';
import React from 'react';

import BackAction from './components/BackAction';

const ViewHeader: React.FC<ViewHeaderProps> = ({ hasBackButton, ...rest }) => (
  <TopNavigation
    leftControl={hasBackButton ? <BackAction /> : undefined}
    {...rest}
  />
);

interface ViewHeaderProps extends TopNavigationProps {
  /** Renders a back button */
  hasBackButton?: boolean;
}

export default ViewHeader;
