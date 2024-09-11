import { useLocation } from 'react-router-dom';
import TodoItem from './TodoItem';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../../api/todoClient';

const TodoDetail = ({ id }) => {
  const location = useLocation();

  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

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
