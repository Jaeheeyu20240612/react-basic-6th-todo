import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getTodos } from '../api/todo-api';
import TodoList from '../components/todos/TodoList';
import TodoForm from '../components/todos/TodoForm';
import { Separator } from '@/components/ui/separator';
import TodoController from '../components/todos/TodoController';

const queryClient = new QueryClient();

const TodoPage = async () => {
  await queryClient.prefetchQuery({
    queryKey: ['todos', 'pending'],
    queryFn: () => getTodos('pending'),
  });

  await queryClient.prefetchQuery({
    queryKey: ['todos', 'completed'],
    queryFn: () => getTodos('completed'),
  });

  await queryClient.prefetchQuery({
    queryKey: ['todos', undefined],
    queryFn: () => getTodos(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='flex flex-col gap-12'>
        <section>
          <h1 className='font-black text-4xl'>TODO LIST</h1>
        </section>
        <Separator />

        <div>
          <TodoController />
          <TodoList />
        </div>
        <TodoForm />
      </div>
    </HydrationBoundary>
  );
};
export default TodoPage;
