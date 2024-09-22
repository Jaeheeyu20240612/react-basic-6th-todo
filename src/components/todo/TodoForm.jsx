import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTodo } from '../../api/todoClient';
import useThemeStore from '../../store/useThemeStore';

const TodoForm = () => {
  const { darkMode } = useThemeStore();
  const [text, setText] = useState('');
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (newTodoObj) => postTodo(newTodoObj),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
      setText('');
    },
  });

  const newTodo = {
    text,
    isCompleted: false,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(newTodo);
  };

  return (
    <form className='flex flex-row my-[30px] gap-3' onSubmit={onSubmit}>
      <input
        className='bg-white flex-1 border-2 rounded-md border-gray-500 focus:border-purple-700 p-3'
        value={text}
        type='text'
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className={`btn ${darkMode ? 'btn-dark' : 'btn-light'}`}
        type='submit'
      >
        추가
      </button>
    </form>
  );
};

export default TodoForm;
