import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleCompleted, handleDelete }) => {
  return (
    <ul>
      <TodoItem
        toggleCompleted={toggleCompleted}
        handleDelete={handleDelete}
        todos={todos}
      />
    </ul>
  );
};

export default TodoList;
