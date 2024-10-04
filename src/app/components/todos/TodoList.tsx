'use client';

import { useTodoQuery } from '@/app/query/useTodoQuery';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { data: todos } = useTodoQuery();
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
