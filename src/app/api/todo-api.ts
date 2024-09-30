import { todo } from '../types/todo-type';

export const getTodos = async (): Promise<todo[]> => {
  const res = await fetch('http://localhost:4000/todos');
  const data: todo[] = await res.json();
  return data;
};

export const getTodo = async (id: string) => {
  const res = await fetch(`http://localhost:4000/todos/${id}`);
  const data: todo = await res.json();
  return data;
};
