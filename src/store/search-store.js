import { create } from "zustand";

export const useSearchStore = create((set) => ({
  searchValue: "",
  addToSearch: (value) => set({
    searchValue: value
  })
}))