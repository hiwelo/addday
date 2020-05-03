import styled, { css } from 'styled-components/native';

const DayIndicator = styled.Text<{
  active: boolean;
}>(
  ({ active }) => css`
    flex: 1;
    height: 40px;
    overflow: hidden;
    padding: 4px 0 0;
    width: 40px;
    background: ${active ? `#222` : `#f6f6f6`};
    border: 0;
    border-radius: 20px;
    color: ${active ? `#eee` : `#888`};
    font-size: 18px;
    font-weight: bold;
    line-height: 36px;
    text-align: center;
  `,
);

export default DayIndicator;
