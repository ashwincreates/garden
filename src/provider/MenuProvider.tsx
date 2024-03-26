"use client";

import { MenuStore } from "@/store/useMenu";
import { ReactNode, createContext, useContext, useState } from "react";

export const MenuStoreContext = createContext<MenuStore | null>(null);

export interface MenuStoreProviderProps {
  children: ReactNode;
}

export const MenuStoreProvider = ({ children }: MenuStoreProviderProps) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((show) => !show);
  return (
    <MenuStoreContext.Provider value={{ show, toggle }}>
      {children}
    </MenuStoreContext.Provider>
  );
};

export const useMenuStore = () => {
  const menuStoreContext = useContext(MenuStoreContext);

  if (!menuStoreContext) {
    throw new Error(`useMenuStore must be use within MenuStoreProvider`);
  }

  return menuStoreContext;
};
