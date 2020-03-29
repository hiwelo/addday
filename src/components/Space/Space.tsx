import { Layout } from '@ui-kitten/components';
import React from 'react';

const Space: React.FC<SpaceProps> = ({ children, type = 'default' }) => {
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

  return <Layout style={{ ...spacing[type] }}>{children}</Layout>;
};

interface SpaceProps {
  type?: 'default' | 'comfortable';
}

export default Space;
