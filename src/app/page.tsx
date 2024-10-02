import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const RootPage = async () => {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};
export default RootPage;
