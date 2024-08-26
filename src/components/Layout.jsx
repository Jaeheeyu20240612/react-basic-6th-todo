import React from 'react';
import styled from 'styled-components';
import { CalendarCheck, Ellipsis, Monitor, Video } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <LayoutMain>
      <Contentsdiv>
        <Title>Quick Access</Title>
        <Dashboard>
          <Boxdiv flex='2' color='#e7582b'>
            <LucidIcon>
              <LucidIcon2>
                <CalendarCheck size={16} />
                {/* <Ellipsis size={16} /> */}
              </LucidIcon2>
              <div>
                <p style={{ fontSize: '1.5em' }}>4</p>
                <p> New Taskst</p>
              </div>
            </LucidIcon>
          </Boxdiv>
          <Boxdiv flex='1' color='#582be7'>
            <LucidIcon>
              <Monitor size={16} />
              <div>
                <p style={{ fontSize: '1.5em' }}>4</p>
                <p> Active Project</p>
              </div>
            </LucidIcon>
          </Boxdiv>
          <Boxdiv flex='1' color='#242424'>
            <LucidIcon>
              <Video size={16} />
              <div>
                <p style={{ fontSize: '1.5em' }}>2</p>
                <p> pending</p>
              </div>
            </LucidIcon>
          </Boxdiv>
        </Dashboard>
      </Contentsdiv>

      <Contentsdiv>
        <Title>Today Tasks</Title>
        {children}
      </Contentsdiv>
    </LayoutMain>
  );
};

export default Layout;

const Title = styled.h1`
  width: 400px;
  font-size: 1em;
  font-weight: 700;
  margin: 1em 0%;
`;
const LayoutMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 70%;
  background-color: #f7f6f9;
  border-radius: 13px;
  margin: 1em auto;
`;

const Contentsdiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Dashboard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

const Boxdiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  flex: ${(props) => props.flex};
  padding: 1.5em;
  width: 100%;
  height: 12em;
  background-color: ${(props) => props.color};
  border-radius: 13px;
  color: white;
  font-size: 10px;
`;

const LucidIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
`;

const LucidIcon2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
