import { Todo } from '../types/todo-type';

export const getTodos = async (filter?: 'completed' | 'pending') => {
  const todoURL = new URL('http://localhost:3000/todos');
  if (filter === 'completed') todoURL.searchParams.set('completed', 'true');
  if (filter === 'pending') todoURL.searchParams.set('completed', 'false');

  const res = await fetch(todoURL.toString(), {
    cache: 'no-store',
  });
  const data: Todo[] = await res.json();
  return data;
};

export const getTodoDetail = async (id: string) => {
  const res = await fetch(`http://localhost:3000/todos/${id}`, {
    cache: 'no-store',
  });
  const todo: Todo = await res.json();
  return todo;
};

// Todo추가
export const addTodo = async (title: string) => {
  const res = await fetch('http://localhost:3000/todos', {
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

// 삭제
export async function deleteTodo(id: string) {
  const res = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('삭제에 실패했습니다.');
  }
  const todo: Todo = await res.json();
  return todo;
}

// 업데이트
export async function updateTodo(id: string, completed: boolean) {
  const res = await fetch(`http://localhost:3000/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed,
    }),
  });
  if (!res.ok) {
    throw new Error('Todo 업데이트에 실패했습니다.');
  }
  const todo: Todo = await res.json();
  return todo;
}
