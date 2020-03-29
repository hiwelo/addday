import { Text, TextProps } from '@ui-kitten/components';
import React from 'react';

import Space from '../Space';

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <Space type="comfortable">
      <Text category="h1">{children}</Text>
    </Space>
  );
};

export interface HeadingProps extends TextProps {
  children: string;
}

export default Heading;
