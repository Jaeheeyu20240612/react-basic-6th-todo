import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: 'theme-storage', // 로컬 스토리지에서 사용할 키 이름
      getStorage: () => localStorage, // localStorage에 저장
    }
  )
);

export default useThemeStore;
