'use client';

import { useAddMutation } from '@/app/query/useTodoMutation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TodoForm = () => {
  const { mutateAsync: addTodo } = useAddMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = formData.get('title')?.toString().trim();

    if (!title) return;

    await addTodo(title);

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <Input
        className='text-black'
        type='text'
        name='title'
        placeholder='할 일을 입력하세요.'
      />
      <div className='text-right'>
        <Button className='w-fit' type='submit'>
          추가
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
