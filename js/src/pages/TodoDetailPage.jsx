import { Link } from 'react-router-dom';
import TodoDetail from '../components/todo/TodoDetail';
import useThemeStore from '../store/useThemeStore';

const TodoDetailPage = () => {
  const { darkmode } = useThemeStore;
  return (
    <div className='w-full'>
      <TodoDetail />
      <Link to='/'>
        <button className={`btn ${darkmode ? 'btn-dark' : 'btn-light'} mt-4`}>
          목록으로
        </button>
      </Link>
    </div>
  );
};

export default TodoDetailPage;
