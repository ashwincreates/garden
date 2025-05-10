import NavLink from "next/link";
import MenuButton from "./MenuButton";
import SearchButton from "./SearchButton";

export function AppHeader() {
  return (
    <>
      <div className="h-[56px] sticky top-0 z-50 bg-secondary border-b">
        <div className="flex items-center justify-between h-full max-w-6xl m-auto px-4">
          <div className="flex gap-2 items-center">
            <MenuButton />
            <NavLink href={"/"} passHref legacyBehavior>
              <h3 className="text-lg font-semibold">gumgum's Garden🌼</h3>
            </NavLink>
          </div>
          <SearchButton />
        </div>
      </div>
    </>
  );
}
