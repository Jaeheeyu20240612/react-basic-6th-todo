import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDashboard from './TodoDashboard';

const TodoContainer = () => {
  return (
    <div>
      <TodoDashboard />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
