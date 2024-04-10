"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type MenuStore = {
  show: boolean;
  search: boolean;
  toggle: () => void;
  toggleSearch: () => void;
};
export const MenuStoreContext = createContext<MenuStore | null>(null);

export interface MenuStoreProviderProps {
  children: ReactNode;
}

export const MenuStoreProvider = ({ children }: MenuStoreProviderProps) => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const toggle = () => setShow((show) => !show);
  const toggleSearch = () => setSearch((search) => !search);

  useEffect(() => {
    const toggleSearchFromKey = (ev: KeyboardEvent) => {
      if (ev.ctrlKey && ev.key === 'k') {
        toggleSearch()
      }
    };

    document.addEventListener("keydown", toggleSearchFromKey);

    return () => document.removeEventListener("keydown", toggleSearchFromKey);
  }, []);

  return (
    <MenuStoreContext.Provider value={{ show, toggle, search, toggleSearch }}>
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
