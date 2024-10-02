'use client';

import { getTodoDetail } from '@/app/api/todo-api';
import { Todo } from '@/app/types/todo-type';
import { useQuery } from '@tanstack/react-query';

interface TodoItemProps {
  id: Todo['id'];
}

const TodoItem = ({ id }: TodoItemProps) => {
  const { data: todo } = useQuery({
    queryKey: ['todos', id],
    queryFn: () => getTodoDetail(id),
  });
  return (
    <div>
      {todo?.title} - {todo?.completed ? '완료' : '미완료'}
    </div>
  );
};

export default TodoItem;
