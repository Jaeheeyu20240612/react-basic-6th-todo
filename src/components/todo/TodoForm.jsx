import React, { useContext, useState } from 'react';
import { TodoContext } from '../../todoContext/TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      text,
      isCompleted: false,
    };
    addTodo(newTodo);

    setText('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={text}
        type='text'
        onChange={(e) => setText(e.target.value)}
      />
      <button type='submit'>추가</button>
    </form>
  );
};

export default TodoForm;
