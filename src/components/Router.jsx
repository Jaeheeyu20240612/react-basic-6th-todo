import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import TodoDetailPage from '../pages/TodoDetailPage';
import RootLayout from './layout/RootLayout';
import TodoProvider from '../todoContext/TodoContext';

const Router = () => {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route path='/' element={<Homepage />} />
            <Route path='/:id' element={<TodoDetailPage />} />
          </Route>
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
};

export default Router;
