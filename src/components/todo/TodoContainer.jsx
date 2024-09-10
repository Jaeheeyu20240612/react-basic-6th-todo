import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDashboard from './TodoDashboard';
import styled from 'styled-components';

const TodoContainer = () => {
  return (
    <Container>
      <TodoDashboard />
      <TodoForm />
      <TodoList />
    </Container>
  );
};

export default TodoContainer;

const Container = styled.div`
  min-width: 800px;
`;
