import React, { useContext } from 'react';
import { TodoContext } from '../../todoContext/TodoContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TodoItem = ({ todo }) => {
  const { onToggleCompleted, onDelete } = useContext(TodoContext);
  return (
    <li key={todo.id}>
      <TaskLink to={`/${todo.id}`}>{todo.text}</TaskLink>
      {todo.text} {todo.isCompleted ? '완료' : '미완료'}
      <button
        onClick={() => {
          onToggleCompleted(todo.id);
        }}
      >
        {todo.isCompleted ? '취소' : '완료'}
      </button>
      <button
        onClick={() => {
          onDelete(todo.id);
        }}
      >
        삭제
      </button>
    </li>
  );
};
export default TodoItem;

const TaskLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;
