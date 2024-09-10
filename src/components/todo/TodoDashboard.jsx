import React, { useContext } from 'react';
import { CalendarCheck, Monitor, Video } from 'lucide-react';
import styled from 'styled-components';
import { TodoContext } from '../../todoContext/TodoContext';
import { Link } from 'react-router-dom';

const TodoDashboard = () => {
  const { completedTodos, pendingTodos, todos } = useContext(TodoContext);

  return (
    <DashboardSection>
      <TodoDashboardHeader>
        <h1>Todo Dashboard</h1>
      </TodoDashboardHeader>

      <DashboardCardList>
        <DashboardCard $flex='2' $color='#e7582b' to={'/detail'}>
          <LucidIcon>
            <LucidIcon2>
              <CalendarCheck size={16} />
            </LucidIcon2>
            <div>
              <p style={{ fontSize: '1.5em' }}>{todos.length}</p>
              <p>All Task</p>
            </div>
          </LucidIcon>
        </DashboardCard>
        <DashboardCard
          $flex='1'
          $color='#582be7'
          to={'/detail?filter=completed'}
        >
          <LucidIcon>
            <Monitor size={16} />
            <div>
              <p style={{ fontSize: '1.5em' }}>{completedTodos.length}</p>
              <p>Completed</p>
            </div>
          </LucidIcon>
        </DashboardCard>
        <DashboardCard $flex='1' $color='#242424' to={'/detail?filter=pending'}>
          <LucidIcon>
            <Video size={16} />
            <div>
              <p style={{ fontSize: '1.5em' }}>{pendingTodos.length}</p>
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
  flex-direction: column;
  gap: 1em;
`;

const TodoDashboardHeader = styled.div``;

const DashboardCardList = styled.div`
  display: flex;
  gap: 10px;
`;
const DashboardCard = styled(Link)`
  display: flex;
  flex: ${(props) => props.$flex};
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 1.5em;
  width: 100%;
  height: 12em;
  background-color: ${(props) => props.$color};
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
