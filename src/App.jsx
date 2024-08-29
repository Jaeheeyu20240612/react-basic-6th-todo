import React from 'react';
import TodoContainer from './components/TodoContainer';
import Layout from './components/Layout';
import TodoProvider from './todoContext/TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <Layout>
        <TodoContainer />
      </Layout>
    </TodoProvider>
  );
};

export default App;
