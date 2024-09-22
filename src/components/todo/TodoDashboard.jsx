import { CalendarCheck, Monitor, Video } from 'lucide-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTodoQuery } from '../../hooks/useTodoQuery';

const TodoDashboard = () => {
  const { data: allTodos } = useTodoQuery();
  const { data: completedTodos } = useTodoQuery('completed');
  const { data: pendingTodos } = useTodoQuery('pending');

  return (
    <section className='w-full flex flex-col gap-2'>
      <header>
        <h1>Todo Dashboard</h1>
      </header>

      <div className='flex gap-[10px]'>
        <DashboardCard $flex='2' $color='#e7582b' to={'/detail'}>
          <div>
            <CalendarCheck size={16} />
          </div>
          <div className='flex flex-col gap-[4em]'>
            <p style={{ fontSize: '1.5em' }}>{allTodos?.length}</p>
            <p>All Task</p>
          </div>
        </DashboardCard>
        <DashboardCard
          $flex='1'
          $color='#582be7'
          to={'/detail?filter=completed'}
        >
          <div className='flex flex-col gap-[4em]'>
            <Monitor size={16} />
            <div>
              <p style={{ fontSize: '1.5em' }}>{completedTodos?.length}</p>
              <p>Completed</p>
            </div>
          </div>
        </DashboardCard>
        <DashboardCard $flex='1' $color='#242424' to={'/detail?filter=pending'}>
          <div className='flex flex-col gap-[4em]'>
            <Video size={16} />
            <div>
              <p style={{ fontSize: '1.5em' }}>{pendingTodos?.length}</p>
              <p> pending</p>
            </div>
          </div>
        </DashboardCard>
      </div>
    </section>
  );
};

export default TodoDashboard;

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
