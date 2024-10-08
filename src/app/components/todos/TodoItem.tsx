'use client';

import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from '@/app/query/useTodoMutation';
import { Todo } from '@/app/types/todo-type';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: deleteTodo } = useDeleteTodoMutation();
  const { mutate: toggleTodo } = useToggleTodoMutation();
  return (
    <div className='flex flex-row justify-between items-center rounded-2xl bg-[#f5f5f5] p-4 hover:bg-[#ebebeb]'>
      <div className='flex flex-row gap-2 items-center'>
        <Checkbox
          checked={todo?.completed}
          onCheckedChange={() =>
            toggleTodo({ id: todo?.id, completed: !todo?.completed })
          }
        />

        <Link className='hover:underline' href={`/todo/${todo?.id}`}>
          {todo?.title}
        </Link>
      </div>
      <div className='flex flex-row gap-2'>
        <Button variant='destructive' onClick={() => deleteTodo(todo?.id)}>
          삭제
        </Button>
        <Button
          onClick={() =>
            toggleTodo({ id: todo?.id, completed: !todo?.completed })
          }
        >
          {todo?.completed ? '완료' : '미완료'}
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
