'use client';

import { useTodoQuery } from '@/app/query/useTodoQuery';
import TodoItem from './TodoItem';
import { useTodoStore } from '@/app/store/useTodoStore';

const TodoList = () => {
  const { completed } = useTodoStore();
  const { data: todos, isLoading } = useTodoQuery(
    completed ? 'completed' : 'pending'
  );

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <ul className='flex flex-col gap-2'>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
