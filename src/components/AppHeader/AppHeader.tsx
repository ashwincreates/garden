import NavLink from "next/link";
import MenuButton from "./MenuButton";
import SearchButton from "./SearchButton";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function AppHeader(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <>
      <div {...props} className="h-[56px] sticky top-0 z-50 bg-secondary border-b">
        <div className={cn("flex items-center justify-between h-full max-w-6xl m-auto px-4", props.className)}>
          <div className="flex gap-2 items-center">
            <MenuButton />
            <NavLink href={"/"} passHref legacyBehavior>
              <h3 className="text-lg font-semibold">gumgum's Garden🌼</h3>
            </NavLink>
          </div>
          <SearchButton />
        </div>
      </div >
    </>
  );
}
