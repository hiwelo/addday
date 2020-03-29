import { TextProps } from '@ui-kitten/components';
import React from 'react';

import Space from '../Space';
import Text from '../Text';

const Paragraph: React.FC<TextProps> = ({ children }) => (
  <Space>
    <Text>{children}</Text>
  </Space>
);

export default Paragraph;
