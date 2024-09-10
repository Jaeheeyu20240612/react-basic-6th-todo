import React, { useContext } from 'react';
import { TodoContext } from '../../todoContext/TodoContext';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import TodoItem from './TodoItem';

const TodoDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { todos } = useContext(TodoContext);
  const queryParameter = new URLSearchParams(location.search);
  const filtered = queryParameter.get('filter');

  let detailTodos = [];
  if (filtered === 'completed') {
    detailTodos = todos.filter((todo) => todo.completed);
  } else if (filtered === 'pending') {
    detailTodos = todos.filter((todo) => todo.completed === false);
  } else {
    detailTodos = todos;
  }

  if (!detailTodos) {
    return <section>404 Not Found Todo!</section>;
  }

  return (
    <section>
      {detailTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

export default TodoDetail;
