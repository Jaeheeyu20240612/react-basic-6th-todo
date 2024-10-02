import { getTodoDetail } from '@/app/api/todo-api';
import TodoItem from '@/app/components/todos/TodoItem';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

type TodoProps = {
  params: {
    id: string;
  };
};
const TodoDetailPage = async ({ params }: TodoProps) => {
  const { id } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['todos', id],
    queryFn: () => getTodoDetail(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TodoItem id={id} />
    </HydrationBoundary>
  );
};
export default TodoDetailPage;
