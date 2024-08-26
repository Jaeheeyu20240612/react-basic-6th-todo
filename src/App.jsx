import React from 'react';
import TodoList from './components/TodoList';
import TodoContainer from './components/TodoContainer';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <TodoContainer />
    </Layout>
  );
};

export default App;
