import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = boolean;

interface ThemeState {
  theme: boolean;
  setTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: false,
      setTheme: () => {
        const nextTheme = !get().theme;
        document.documentElement.classList.toggle("dark", nextTheme);
        set({ theme: nextTheme });
      },
    }),
    {
      name: "theme",
    },
  ),
);
