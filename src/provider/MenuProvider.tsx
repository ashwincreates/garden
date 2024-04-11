"use client";

import {
  ReactNode,
  createContext,
  useCallback,
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

  const toggleSearchFromKey = useCallback((ev: KeyboardEvent) => {
    ev.preventDefault();
    if (ev.ctrlKey && ev.key === "k") {
      toggleSearch();
    }
  }, []);

  useEffect(() => {
    if (!search) {
      document.addEventListener("keydown", toggleSearchFromKey, false);
    } else {
      document.removeEventListener("keydown", toggleSearchFromKey, false);
    }
    return () =>
      document.removeEventListener("keydown", toggleSearchFromKey, false);
  }, [search]);

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
