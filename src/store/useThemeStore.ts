import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = `lightMode` | `darkMode`;

interface ThemeState {
  theme: ThemeMode;
  setTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "lightMode",
      setTheme: () => {
        const newTheme = get().theme === "lightMode" ? "darkMode" : "lightMode";
        // Tailwind dark 클래스 적용
        if (typeof window !== "undefined") {
          document.documentElement.classList.toggle(
            "dark",
            newTheme === "darkMode",
          );
        }
        set({ theme: newTheme });
      },
    }),
    {
      name: "theme",
    },
  ),
);
