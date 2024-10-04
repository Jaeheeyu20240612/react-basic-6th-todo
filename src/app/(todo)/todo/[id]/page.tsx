import { getTodoDetail } from '@/app/api/todo-api';
import TodoItem from '@/app/components/todos/TodoItem';
import { Todo } from '@/app/types/todo-type';
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

  const todo = queryClient.getQueryData<Todo>(['todos', id]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {todo ? <TodoItem todo={todo} /> : <div></div>}
    </HydrationBoundary>
  );
};
export default TodoDetailPage;
