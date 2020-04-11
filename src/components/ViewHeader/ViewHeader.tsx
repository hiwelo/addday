import {
  TopNavigation,
  TopNavigationProps,
  TopNavigationAction,
  Icon,
} from '@ui-kitten/components';
import React from 'react';

import BackAction from './components/BackAction';

const ViewHeader: React.FC<ViewHeaderProps> = ({
  hasBackButton,
  sideAction,
  sideActionIcon,
  ...rest
}) => {
  const SideAction =
    sideAction &&
    sideActionIcon &&
    (props => (
      <TopNavigationAction
        {...props}
        icon={style => <Icon {...style} name={sideActionIcon} />}
        onPress={sideAction}
      />
    ));

  return (
    <TopNavigation
      alignment="center"
      leftControl={hasBackButton ? <BackAction /> : undefined}
      rightControls={
        sideAction && sideActionIcon ? [<SideAction />] : undefined
      }
      {...rest}
    />
  );
};

export interface ViewHeaderProps extends TopNavigationProps {
  /** Renders a back button */
  hasBackButton?: boolean;
  /** Renders a side action that triggers the provided callback */
  sideAction?(): void;
  /** Indicates the icon to use for the side action */
  sideActionIcon?: string;
}

export default ViewHeader;
