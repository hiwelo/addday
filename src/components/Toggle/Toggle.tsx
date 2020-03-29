import { Toggle as UIKitToggle } from '@ui-kitten/components';
import styled from 'styled-components/native';

const Toggle = styled(UIKitToggle)`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-right: 32px;
  width: 100%;
`;

export default Toggle;
