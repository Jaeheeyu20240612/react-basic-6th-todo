import { useMutation, useQueryClient } from '@tanstack/react-query';
import { handleDelete, postTodo, toggleComplete } from '../api/todoClient';
import { useToast } from './useToast';

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (todo) => postTodo(todo),
    onSuccess: () => {
      console.log('아이템 추가 콘솔');
      toast('아이템이 추가되었습니다.');
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  return useMutation({
    mutationFn: (id) => handleDelete(id),
    onSuccess: () => {
      toast('아이템이 삭제되었습니다.');
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });
};

export const useToggleTodoMutation = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ id, completed }) => toggleComplete(id, completed),
    onSuccess: () => {
      toast('아이템이 수정되었습니다.');
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });
};
