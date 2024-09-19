import { useMutation, useQueryClient } from '@tanstack/react-query';
import { handleDelete, postTodo, toggleComplete } from '../api/todoClient';

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todo) => postTodo(todo),
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
    mutationFn: (id) => handleDelete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });
};

export const useToggleTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, completed }) => toggleComplete(id, completed),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });
};
