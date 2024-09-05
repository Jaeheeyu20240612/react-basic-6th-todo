import React from 'react';
import { CalendarCheck, Monitor, Video } from 'lucide-react';
import styled from 'styled-components';

const TodoDashboard = () => {
  return (
    <DashboardSection>
      <TodoDashboardHeader>
        <h1>Todo Dashboard</h1>
      </TodoDashboardHeader>

      <DashboardCardList>
        <DashboardCard flex='2' color='#e7582b'>
          <LucidIcon>
            <LucidIcon2>
              <CalendarCheck size={16} />
            </LucidIcon2>
            <div>
              <p style={{ fontSize: '1.5em' }}>4</p>
              <p> New Tasks</p>
            </div>
          </LucidIcon>
        </DashboardCard>
        <DashboardCard flex='1' color='#582be7'>
          <LucidIcon>
            <Monitor size={16} />
            <div>
              <p style={{ fontSize: '1.5em' }}>4</p>
              <p> Active Project</p>
            </div>
          </LucidIcon>
        </DashboardCard>
        <DashboardCard flex='1' color='#242424'>
          <LucidIcon>
            <Video size={16} />
            <div>
              <p style={{ fontSize: '1.5em' }}>2</p>
              <p> pending</p>
            </div>
          </LucidIcon>
        </DashboardCard>
      </DashboardCardList>
    </DashboardSection>
  );
};

export default TodoDashboard;

const DashboardSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

const TodoDashboardHeader = styled.div``;

const DashboardCardList = styled.div``;
const DashboardCard = styled.div`
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
