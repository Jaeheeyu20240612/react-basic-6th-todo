import React, { createContext, useState } from 'react';
import { TODO_SAMPLE } from '../constants/todo-sample';

export const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(TODO_SAMPLE);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const onDelete = (id) => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      }
      return true;
    });
    setTodos(filteredTodos);
  };

  const onToggleCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, onToggleCompleted, onDelete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
