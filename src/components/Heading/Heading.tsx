import { Text } from '@ui-kitten/components';
import styled from 'styled-components/native';

const Heading = styled(Text).attrs({ category: 'h1' })`
  font-size: 31px;
  font-weight: 800;
  line-height: 46px;
`;

export default Heading;
