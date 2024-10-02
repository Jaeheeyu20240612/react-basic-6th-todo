import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import TodoForm from './components/todos/TodoForm';
import TodoList from './components/todos/TodoList';

const RootPage = async () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <TodoForm />
        <TodoList />
      </main>
    </HydrationBoundary>
  );
};
export default RootPage;
