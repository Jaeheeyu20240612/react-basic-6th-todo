import TodoItem from './TodoItem';
import { useTodoFilterQuery } from '../../hooks/useTodoQuery';

const TodoList = () => {
  const { data: todos, isLoading, error } = useTodoFilterQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className='flex flex-col gap-4'>
      {todos.map((todo) => (
        <li className='flew flex-row p-4 bg-white rounded-lg' key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
