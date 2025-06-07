import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "light",
  toogleTheme: () => set((state) => ({theme: state.theme === "light" ? "dark" : "light"}))
}))