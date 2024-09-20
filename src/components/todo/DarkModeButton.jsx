import { useEffect } from 'react';
import useThemeStore from '../../store/useThemeStore';

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
      <button
        className={`${
          darkMode
            ? 'fixed left-4 bottom-4 border border-white text-white rounded-md py-3 px-2'
            : 'fixed left-4 bottom-4 border border-black rounded-md py-3 px-2'
        }`}
        onClick={toggleDarkMode}
      >
        스위치
      </button>
    </div>
  );
};

export default DarkModeButton;
