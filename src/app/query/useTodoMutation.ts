import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo, deleteTodo, updateTodo } from '../api/todo-api';

export const useAddMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });
};

interface ToggleTodoCompletedProps {
  id: string;
  completed: boolean;
}
export const useToggleTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, completed }: ToggleTodoCompletedProps) =>
      updateTodo(id, completed),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });
};
