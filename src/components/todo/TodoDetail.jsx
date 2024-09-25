import { useLocation, useParams } from 'react-router-dom';
import TodoItem from './TodoItem';
import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../../api/todoClient';
import { useTodoQuery } from '../../hooks/useTodoQuery';

const TodoDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParameter = new URLSearchParams(location.search);
  const filtered = queryParameter.get('filter');

  const { data: allTodos } = useTodoQuery();
  const { data: completedTodos } = useTodoQuery('completed');
  const { data: pendingTodos } = useTodoQuery('pending');

  const selectedTodo = id
    ? allTodos.find((todo) => todo.id === Number(id))
    : null;
  let detailTodos = [];
  if (selectedTodo) {
    detailTodos = [selectedTodo];
  } else if (filtered === 'completed') {
    detailTodos = allTodos.filter((todo) => todo.completed);
  } else if (filtered === 'pending') {
    detailTodos = allTodos.filter((todo) => todo.completed === false);
  } else {
    detailTodos = allTodos;
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
