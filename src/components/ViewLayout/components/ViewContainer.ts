import { Layout } from '@ui-kitten/components';
import styled from 'styled-components/native';

const ViewContainer = styled(Layout)<ViewContainerProps>`
  flex: 1;
  background-color: ${({ pastelBackground }) =>
    pastelBackground ? `#cadbe0` : `transparent`};
`;

export interface ViewContainerProps {
  /** Adds a pastel background to the layout container */
  pastelBackground?: boolean;
}

export default ViewContainer;
