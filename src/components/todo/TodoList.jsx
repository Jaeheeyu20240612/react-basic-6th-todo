import TodoItem from './TodoItem';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../../api/todoClient';

const TodoList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const { todos, pendingTodos, completedTodos } = useContext(TodoContext);
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filter = searchParams.get('filter');
  // const filteredTodos =
  //   filter === 'completed'
  //     ? completedTodos
  //     : filter === 'active'
  //     ? pendingTodos
  //     : todos;

  // const updateFilter = (newfilter) => {
  //   setSearchParams({ filter: newfilter });
  // };

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
