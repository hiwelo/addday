import { Layout, LayoutProps } from '@ui-kitten/components';
import React from 'react';

const Space: React.FC<SpaceProps> = ({
  children,
  type = 'default',
  ...rest
}) => {
  const spacing = {
    default: {
      paddingBottom: 16,
      paddingTop: 8,
    },
    comfortable: {
      paddingBottom: 24,
      paddingTop: 24,
    },
  };

  return (
    <Layout {...rest} style={{ ...spacing[type] }}>
      {children}
    </Layout>
  );
};

interface SpaceProps extends LayoutProps {
  type?: 'default' | 'comfortable';
}

export default Space;
