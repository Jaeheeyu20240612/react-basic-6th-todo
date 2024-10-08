import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../api/todo-api';

export const useTodoQuery = (filter?: 'completed' | 'pending') => {
  return useQuery({
    queryKey: ['todos', filter],
    queryFn: () => getTodos(filter),
  });
};
