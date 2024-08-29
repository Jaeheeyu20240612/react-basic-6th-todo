import React, { useContext, useState } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../todoContext/TodoContext';
import styled from 'styled-components';

const TodoList = () => {
  return (
    <UlStyle>
      <TodoItem />
    </UlStyle>
  );
};

export default TodoList;

const UlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;
