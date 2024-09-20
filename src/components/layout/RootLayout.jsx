import { Outlet } from 'react-router-dom';
import useThemeStore from '../../store/useThemeStore';
import DarkModeButton from '../todo/DarkModeButton';

const RootLayout = () => {
  const { darkMode } = useThemeStore();
  return (
    <main
      className={`${
        darkMode
          ? 'bg-black flex flex-col min-h-full justify-center items-center w-[7/10] border-3 my-1 mx-auto'
          : 'bg-[#f7f6f9] flex flex-col min-h-full justify-center items-center w-[7/10] border-3 my-1 mx-auto'
      }`}
    >
      <div
        className={`${
          darkMode
            ? 'bg-black max-w-[1024px] mx-auto p-5'
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
