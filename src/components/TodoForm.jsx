import React from 'react';

const TodoForm = ({ handleSubmit, handleInputChange, inputTodo }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} value={inputTodo} type='text' />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default TodoForm;
