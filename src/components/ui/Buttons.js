import styled from 'styled-components';

export const Buttons = styled.button`
  padding: 10px;
  background-color: ${(props) => props.color || '#000'};
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin-right: 10px;
`;
