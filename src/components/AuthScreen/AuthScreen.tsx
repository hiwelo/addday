import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { SvgXml } from 'react-native-svg';

import privacySvg from '../../assets/svgs/privacy-protection';
import touchprintSvg from '../../assets/svgs/touchprint';
import TextStyles from '../../components/TextStyles/TextStyles';
import ViewHeading from '../../components/ViewHeading';
import { useI18n } from '../../services/LocalizationProvider';
import AuthScreenButton from './components/AuthScreenButton';
import AuthScreenCTA from './components/AuthScreenCTA';
import AuthScreenCTABackground from './components/AuthScreenCTABackground';
import AuthScreenContainer from './components/AuthScreenContainer';
import AuthScreenContent from './components/AuthScreenContent';
import AuthScreenHeading from './components/AuthScreenHeading';
import AuthScreenIllustration from './components/AuthScreenIllustration';

const AuthScreen: React.FC<AuthScreenProps> = ({ cta, username }) => {
  const { __ } = useI18n();

  return (
    <AuthScreenContainer>
      <AuthScreenCTABackground />
      <AuthScreenHeading>
        <ViewHeading>
          {`${__('auth.headline')}\n`}
          <TextStyles type="medium">
            {`${username}`}
            {`${__('auth.headlineEnding')}`}
          </TextStyles>
        </ViewHeading>
      </AuthScreenHeading>
      <AuthScreenIllustration>
        <SvgXml height="100%" xml={privacySvg} />
      </AuthScreenIllustration>
      <AuthScreenContent>
        <TextStyles>{__('auth.contentHeadline')}</TextStyles>
        <TextStyles>
          {__('auth.contentStart')}
          <TextStyles type="strong">{__('auth.contentBold')}</TextStyles>
          {__('auth.contentEnd')}
        </TextStyles>
      </AuthScreenContent>
      <AuthScreenCTA>
        <TouchableWithoutFeedback onPress={cta}>
          <AuthScreenButton>
            <SvgXml height="40" width="40" xml={touchprintSvg} />
          </AuthScreenButton>
        </TouchableWithoutFeedback>
      </AuthScreenCTA>
    </AuthScreenContainer>
  );
};

interface AuthScreenProps {
  /** Function to trigger when the CTA is pressed */
  cta(): void;
  /** Username to use on this view */
  username: string;
}

export default AuthScreen;
