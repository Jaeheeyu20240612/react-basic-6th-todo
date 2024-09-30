import { useEffect } from 'react';
import useThemeStore from '../../store/useThemeStore';
import { ToggleLeft, ToggleRight } from 'lucide-react';

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      {darkMode ? (
        <ToggleRight
          className='w-11 h-11 text-white fixed left-4 bottom-4'
          onClick={toggleDarkMode}
        />
      ) : (
        <ToggleLeft
          className='w-11 h-11 text-black fixed left-4 bottom-4'
          onClick={toggleDarkMode}
        />
      )}
    </div>
  );
};

export default DarkModeButton;
