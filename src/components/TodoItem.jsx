import React, { useContext } from 'react';
import { TodoContext } from '../todoContext/TodoContext';
import styled from 'styled-components';

const TodoItem = () => {
  const { toggleCompleted, handleDelete, todos } = useContext(TodoContext);
  return (
    <div>
      {todos.map((todo) => (
        <ListStyle key={todo.id}>
          <p
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              marginRight: 'auto',
            }}
          >
            {todo.text} -{' '}
            {todo.completed ? <span>완료</span> : <span>미완료</span>}
          </p>
          <Buttons onClick={() => toggleCompleted(todo.id)} color='#582be7'>
            완료
          </Buttons>
          <Buttons
            color='#e7582b'
            onClick={() => {
              handleDelete(todo.id);
            }}
          >
            삭제
          </Buttons>
        </ListStyle>
      ))}
    </div>
  );
};

export default TodoItem;

const ListStyle = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
  margin-bottom: 1em;
  padding: 1em;
  border-radius: 1rem;
`;

const Buttons = styled.button`
  padding: 1em;
  color: white;
  background-color: ${(props) => props.color};
  border-radius: 1rem;
  cursor: pointer;
  margin-right: 5px;
`;
