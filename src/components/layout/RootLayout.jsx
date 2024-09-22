import { Outlet } from 'react-router-dom';
import useThemeStore from '../../store/useThemeStore';
import DarkModeButton from '../todo/DarkModeButton';

const RootLayout = () => {
  const { darkMode } = useThemeStore();
  return (
    <main
      className={`${
        darkMode
          ? 'bg-[#262626] flex flex-col min-h-full justify-center items-center w-[7/10] border-3 my-1 mx-auto mt-16'
          : 'bg-[#f7f6f9] flex flex-col min-h-full justify-center items-center w-[7/10] border-3 my-1 mx-auto mt-16'
      }`}
    >
      <div
        className={`${
          darkMode
            ? 'bg-[dimgray] max-w-[1024px] rounded-lg mx-auto p-5'
            : 'max-w-[1024px] mx-auto p-5'
        }`}
      >
        <Outlet />
      </div>
      <DarkModeButton />
    </main>
  );
};

export default RootLayout;
