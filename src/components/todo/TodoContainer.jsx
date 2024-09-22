import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDashboard from './TodoDashboard';

const TodoContainer = () => {
  return (
    <div className='min-w-[800px]'>
      <TodoDashboard />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoContainer;
