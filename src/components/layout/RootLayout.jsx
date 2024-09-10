import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const RootLayout = () => {
  return (
    <LayoutMain>
      <RootLayoutContents>
        <Outlet />
      </RootLayoutContents>
    </LayoutMain>
  );
};

export default RootLayout;

const LayoutMain = styled.main`
  background-color: #f7f6f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  border-radius: 13px;
  margin: 1em auto;
`;

const RootLayoutContents = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
`;
