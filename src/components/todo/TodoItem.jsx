import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Buttons } from '../ui/Buttons';
import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from '../../hooks/useTodoMutation';

const TodoItem = ({ todo }) => {
  const { mutateAsync: deleteTodo } = useDeleteTodoMutation();
  const { mutate: handleToggle } = useToggleTodoMutation();

  return (
    <Lists key={todo.id}>
      <div style={{ marginRight: 'auto' }}>
        <TaskLink to={`detail/id=${todo.id}`}>
          <p>{todo.text}</p>
          <p>{todo.completed ? '완료' : '미완료'}</p>
        </TaskLink>
      </div>

      <div>
        <Buttons
          color='#e7582b'
          onClick={() => {
            handleToggle({
              id: todo.id,
              completed: !todo.completed,
            });
          }}
        >
          {todo.completed ? '취소' : '완료'}
        </Buttons>
        <Buttons
          color='#582be7'
          onClick={async () => {
            await deleteTodo(todo.id);
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
