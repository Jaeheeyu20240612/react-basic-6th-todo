import { getTodos } from '../../api/todo-api';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

const TodoList = async () => {
  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });
  return (
    <div>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <Link href={`/detail/${todo.id}`}>
              {todo.title} - {todo.completed ? '완료' : '미완료'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
