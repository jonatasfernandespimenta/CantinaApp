import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  background-color: #fa695f;
  ${({ height }) => height && css`
    height: ${`${height}px`};
  `}
  justify-content: center;
  border-bottom-color: white;
  border-bottom-width: 1px;
`;

export const Text = styled.Text`
  align-self: center;
  color: white;
  font-size: 20px;
`;
