import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  ${({ height }) => height && css`
    height: ${`${height}px`};
  `}
  justify-content: center;
`;

export const Text = styled.Text`
  align-self: center;
  color: black;
  font-size: 20px;
`;
