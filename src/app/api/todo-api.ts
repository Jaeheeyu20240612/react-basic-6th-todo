import { Todo } from '../types/todo-type';

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch('http://localhost:4000/todos');
  const data: Todo[] = await res.json();
  return data;
};

export const getTodoDetail = async (id: string) => {
  const res = await fetch(`http://localhost:4000/todos/${id}`, {
    cache: 'no-store',
  });
  const todo: Todo = await res.json();
  return todo;
};

// Todo추가
export const addTodo = async (title: string) => {
  const res = await fetch('http://localhost:4000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      completed: false,
    }),
  });

  const todo: Todo = await res.json();
  return todo;
};
