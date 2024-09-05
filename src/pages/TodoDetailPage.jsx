import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TodoDetail from '../components/todo/TodoDetail';
import styled from 'styled-components';

const TodoDetailPage = () => {
  return (
    <div>
      <TodoDetail />
      <Link to='/'>
        <ToListButton>목록으로</ToListButton>
      </Link>
    </div>
  );
};

export default TodoDetailPage;

const ToListButton = styled.button``;
