import { Text, TextProps } from '@ui-kitten/components';
import React from 'react';

import Space from '../Space';

const Paragraph: React.FC<TextProps> = ({ children }) => (
  <Space>
    <Text>{children}</Text>
  </Space>
);

export default Paragraph;
