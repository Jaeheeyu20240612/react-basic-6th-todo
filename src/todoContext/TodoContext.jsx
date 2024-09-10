import React, { createContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { todoClient } from '../api/todoClient';

export const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  // 서버에서 todos 가져오기
  const fetchTodos = async () => {
    const { data } = await todoClient.get('/');
    setTodos(data);
  };
  // todo 추가하기
  const addTodos = async (newTodoObj) => {
    await todoClient.post('/', newTodoObj);

    fetchTodos();
  };

  // 비동기 삭제
  const handleDelete = async (id) => {
    await todoClient.delete(`/${id}`);

    fetchTodos();

    navigate('/');
  };
  // 비동기 업데이트
  const toggleComplete = async (id, completed) => {
    await todoClient.patch(`/${id}`, {
      completed,
    });

    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <TodoContext.Provider
      value={{
        fetchTodos,
        todos,
        addTodos,
        toggleComplete,
        handleDelete,
        pendingTodos,
        completedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
