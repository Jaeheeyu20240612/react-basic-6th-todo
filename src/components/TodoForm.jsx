import React, { useContext } from 'react';
import { TodoContext } from '../todoContext/TodoContext';

const TodoForm = () => {
  const { handleSubmit, handleInputChange, inputTodo } =
    useContext(TodoContext);

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={inputTodo} type='text' />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default TodoForm;
