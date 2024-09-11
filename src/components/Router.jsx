import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import TodoDetailPage from '../pages/TodoDetailPage';
import RootLayout from './layout/RootLayout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/detail' element={<TodoDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
