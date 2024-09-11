import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Buttons } from '../ui/Buttons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { handleDelete, toggleComplete } from '../../api/todoClient';

const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id) => handleDelete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });

  const { mutate: handleToggle } = useMutation({
    mutationFn: ({ id, completed }) => toggleComplete(id, completed),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos'],
      });
    },
  });

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
          onClick={() => {
            mutate(todo.id);
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
