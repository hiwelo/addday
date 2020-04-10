import { useNavigation } from '@react-navigation/native';
import { TopNavigationAction } from '@ui-kitten/components';
import React from 'react';

import BackIcon from './BackIcon';

const BackAction: React.FC = () => {
  const { goBack } = useNavigation();

  return <TopNavigationAction icon={BackIcon} onPress={goBack} />;
};

export default BackAction;
