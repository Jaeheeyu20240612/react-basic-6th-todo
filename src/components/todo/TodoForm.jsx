import React, { useContext, useState } from 'react';
import { TodoContext } from '../../todoContext/TodoContext';
import styled from 'styled-components';
import { Buttons } from '../ui/Buttons';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { addTodos } = useContext(TodoContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      text,
      isCompleted: false,
    };
    addTodos(newTodo);

    setText('');
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
