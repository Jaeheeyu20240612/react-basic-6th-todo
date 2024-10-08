'use client';
import { useTodoQuery } from '@/app/query/useTodoQuery';
import { useTodoStore } from '@/app/store/useTodoStore';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import React, { useId } from 'react';

const TodoController = () => {
  const completedSwitchId = useId();
  const { completed, toggleCompleted } = useTodoStore();
  const { data: allTodos } = useTodoQuery();
  const { data: completedTodos } = useTodoQuery('completed');
  return (
    <div className='flex flex-row justify-between px-4'>
      <p className='mb-72'>
        {completedTodos?.length}/{allTodos?.length}
      </p>
      <div className='flex items-center space-x-2'>
        <Switch
          id={completedSwitchId}
          checked={completed}
          onCheckedChange={(checked) => toggleCompleted(checked)}
        />
        <Label htmlFor={completedSwitchId}>COMPLETED</Label>
      </div>
    </div>
  );
};

export default TodoController;
