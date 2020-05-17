import React from 'react';

import DefaultText from './components/DefaultText';
import MediumText from './components/MediumText';
import StrongText from './components/StrongText';
import { TextStyle } from './types';

const textComponents: Record<TextStyle, React.FC> = {
  default: DefaultText,
  medium: MediumText,
  strong: StrongText,
};

const TextStyles: React.FC<{
  type?: TextStyle;
}> = ({ children, type = 'default' }) => {
  const TextElement = textComponents[type];

  return <TextElement>{children}</TextElement>;
};

export default TextStyles;
