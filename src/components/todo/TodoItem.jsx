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
    <li className='w-full flex flex-fow items-center' key={todo.id}>
      <div style={{ marginRight: 'auto' }}>
        <Link
          className='flex flex-row gap-[1em] hover:underline'
          to={`detail/id=${todo.id}`}
        >
          <p>{todo.text}</p>
          <p>{todo.completed ? '완료' : '미완료'}</p>
        </Link>
      </div>

      <div>
        <button
          className='btn bg-[#e7582b] rounded-xl text-white'
          onClick={() => {
            handleToggle({
              id: todo.id,
              completed: !todo.completed,
            });
          }}
        >
          {todo.completed ? '취소' : '완료'}
        </button>
        <button
          className='btn bg-[#582be7] rounded-xl text-white'
          color=''
          onClick={async () => {
            await deleteTodo(todo.id);
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
};
export default TodoItem;
