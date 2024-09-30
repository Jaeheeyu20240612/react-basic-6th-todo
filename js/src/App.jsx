import Router from './components/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useThemeStore from './store/useThemeStore';
import { useEffect } from 'react';
import Toaster from './components/Toaster';

const queryClient = new QueryClient();
const App = () => {
  const { darkMode } = useThemeStore();
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#262626'; // 다크 모드 배경색
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f7f6f9'; // 라이트 모드 배경색
    }
  }, [darkMode]);
  return (
    <QueryClientProvider client={queryClient}>
      <Router />;
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
