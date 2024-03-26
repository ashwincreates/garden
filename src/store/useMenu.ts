import { create } from "zustand";

export type MenuStore = {
  show: boolean;
  toggle: () => void;
};
const createMenuStore = () => create<MenuStore>()((set) => ({
  show: false,
  toggle: () => set((state) => ({ ...state, show: !state.toggle })),
}));

export default createMenuStore;
