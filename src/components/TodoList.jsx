import React, { useState } from 'react';

const TodoList = () => {
  const SAMPLE_TODOS = [
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Clean the house', completed: false },
    { id: 3, text: 'Go for a run', completed: false },
    { id: 4, text: 'Finish homework', completed: false },
    { id: 5, text: 'Call mom', completed: false },
    { id: 6, text: 'Buy groceries', completed: false },
    { id: 7, text: 'Walk the dog', completed: false },
    { id: 8, text: 'Read a book', completed: false },
    { id: 9, text: 'Do laundry', completed: false },
    { id: 10, text: 'Write code', completed: false },
  ];

  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [inputTodo, setInputTodo] = useState('');

  const handleInputChange = (event) => {
    setInputTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputTodo.trim()) {
      return;
    }
    setTodos([
      { id: crypto.randomUUID(), text: inputTodo, completed: false },
      ...todos,
    ]);
    setInputTodo('');
  };
  const toggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = {
          ...todo,
          completed: !todo.completed,
        };
        return newTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const filteredTodo = todos.filter((todo) => {
      return todo.id !== id ? true : false;
    });

    setTodos(filteredTodo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} value={inputTodo} type='text' />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text} -{' '}
              {todo.completed ? <span>완료</span> : <span>미완료</span>}
            </p>
            <button onClick={() => toggleCompleted(todo.id)}>완료</button>
            <button
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
