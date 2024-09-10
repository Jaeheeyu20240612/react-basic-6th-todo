import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TodoDetail from '../components/todo/TodoDetail';
import styled from 'styled-components';
import { Buttons } from '../components/ui/Buttons';

const TodoDetailPage = () => {
  return (
    <div>
      <TodoDetail />
      <Link to='/'>
        <Buttons>목록으로</Buttons>
      </Link>
    </div>
  );
};

export default TodoDetailPage;

const ToListButton = styled.button``;
