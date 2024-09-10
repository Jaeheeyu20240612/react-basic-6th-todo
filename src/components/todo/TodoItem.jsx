import React, { useContext } from 'react';
import { TodoContext } from '../../todoContext/TodoContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Buttons } from '../ui/Buttons';

const TodoItem = ({ todo }) => {
  const { toggleComplete, handleDelete } = useContext(TodoContext);
  return (
    <Lists key={todo.id}>
      <div style={{ marginRight: 'auto' }}>
        <TaskLink to={`/${todo.id}`}>
          <p>{todo.text}</p>
          <p>{todo.completed ? '완료' : '미완료'}</p>
        </TaskLink>
      </div>

      <div>
        <Buttons
          color='#e7582b'
          onClick={() => {
            toggleComplete(todo.id, !todo.completed);
          }}
        >
          {todo.completed ? '취소' : '완료'}
        </Buttons>
        <Buttons
          color='#582be7'
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          삭제
        </Buttons>
      </div>
    </Lists>
  );
};
export default TodoItem;

const TaskLink = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 1em;
  &:hover {
    text-decoration: underline;
  }
`;

const Lists = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
