import { getTodoDetail } from '@/app/api/todo-api';
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

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['todos'],
    queryFn: getTodoDetail(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>TodoDetailPage</div>
    </HydrationBoundary>
  );
};
export default TodoDetailPage;
