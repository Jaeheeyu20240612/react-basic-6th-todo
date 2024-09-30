import { getTodos } from '../api/todo-api';
import Link from 'next/link';
import { todo } from '../types/todo-type';

const TodoList = async () => {
  const todos: todo[] = await getTodos();

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/detail/${todo.id}`}>
              {todo.text} - {todo.completed ? '완료' : '미완료'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
