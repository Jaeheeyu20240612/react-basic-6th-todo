'use client';
import React from 'react';
import { addTodo } from '../api/todo-api';

const TodoForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get('title')?.toString().trim();
    if (!title) return;

    await addTodo(title);

    (e.target as HTMLFormElement).reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' />
      <button type='submit'>추가</button>
    </form>
  );
};

export default TodoForm;
