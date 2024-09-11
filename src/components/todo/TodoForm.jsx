import { useState } from 'react';
import styled from 'styled-components';
import { Buttons } from '../ui/Buttons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTodo } from '../../api/todoClient';

const TodoForm = () => {
  const [text, setText] = useState('');
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (newTodoObj) => postTodo(newTodoObj),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
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
    <FormContainer onSubmit={onSubmit}>
      <InputStyle
        value={text}
        type='text'
        onChange={(e) => setText(e.target.value)}
      />
      <Buttons type='submit'>추가</Buttons>
    </FormContainer>
  );
};

export default TodoForm;

const FormContainer = styled.form`
  display: flex;

  flex-direction: row;
  margin: 30px 0;
`;
const InputStyle = styled.input`
  background-color: white;
  flex: 1;
  border-radius: 9px;
  margin-right: 15px;
`;
