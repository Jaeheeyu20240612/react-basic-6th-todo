import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../api/todo-api';

export const useTodoQuery = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });
};
