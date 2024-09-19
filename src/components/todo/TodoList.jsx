import TodoItem from './TodoItem';
import styled from 'styled-components';
import { useTodoFilterQuery } from '../../hooks/useTodoQuery';

const TodoList = () => {
  const { data: todos, isLoading, error } = useTodoFilterQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
