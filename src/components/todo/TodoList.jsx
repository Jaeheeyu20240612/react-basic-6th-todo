import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../../todoContext/TodoContext';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

const TodoList = () => {
  const { todos, pendingTodos, completedTodos } = useContext(TodoContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter');
  const filteredTodos =
    filter === 'completed'
      ? completedTodos
      : filter === 'active'
      ? pendingTodos
      : todos;

  const updateFilter = (newfilter) => {
    setSearchParams({ filter: newfilter });
  };

  return (
    <TodoLists>
      {todos.map((todo) => (
        <TodoListContent key={todo.id}>
          <TodoItem todo={todo} />
        </TodoListContent>
      ))}
    </TodoLists>
  );
};

export default TodoList;

const TodoLists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const TodoListContent = styled.li`
  display: flex;
  flex-direction: row;
  padding: 1em;
  background-color: white;
  border-radius: 9px;
`;
