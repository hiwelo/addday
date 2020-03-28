import { Text, TextProps } from '@ui-kitten/components';
import React from 'react';

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <Text category="h1">{children}</Text>;
};

export interface HeadingProps extends TextProps {
  children: string;
}

export default Heading;
