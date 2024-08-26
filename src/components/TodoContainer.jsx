import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
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

const TodoContainer = () => {
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
      <TodoForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        inputTodo={inputTodo}
      />
      <TodoList
        toggleCompleted={toggleCompleted}
        handleDelete={handleDelete}
        todos={todos}
      />
    </div>
  );
};

export default TodoContainer;
