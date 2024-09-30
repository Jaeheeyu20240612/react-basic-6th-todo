import { getTodo } from '@/app/api/todo-api';
import { todo } from '@/app/types/todo-type';

type TodoProps = {
  params: {
    id: string;
  };
};
const TodoDetailPage = async ({ params }: TodoProps) => {
  const { id } = params;

  const data = await getTodo(id);
  return <div>{id} </div>;
};

export default TodoDetailPage;
