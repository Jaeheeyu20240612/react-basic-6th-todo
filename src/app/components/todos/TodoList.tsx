'use client';
import { getTodos } from '../../api/todo-api';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

const TodoList = () => {
  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });
  return (
    <div>
      <ul>
        {todos?.map(({ id, completed, title }) => (
          <li key={id}>
            <Link href={`/detail/${id}`}>
              {title} - {completed ? '완료' : '미완료'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
