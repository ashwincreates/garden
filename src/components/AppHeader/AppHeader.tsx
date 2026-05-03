"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuIcon, Search } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

function NavBar() {
  const pathname = usePathname();

  const navItems: {label: string, href: string}[] = [
    // { label: "home", href: "/" },
    // { label: "notebooks", href: "/notebooks" },
    // { label: "writing", href: "/writing" },
    // { label: "tags", href: "/tags" },
  ];

  return (
    <nav
      className={cn(
        "w-full",
        "border-b border-[#e2ddd5]",
        "bg-[#f5f2ed]"
      )}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto",
          "px-6 md:px-12",
          "h-[76px]",
          "flex items-center justify-between"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 no-underline shrink-0"
        >
          <span className="w-[7px] h-[7px] rounded-full bg-[#c8742a]" />

          <h2
          className="text-[22px] leading-tight font-normal text-[#1a1814]"
          style={{ fontFamily: "'Lora', serif" }}
        >
          gumgum&apos;s <span className="italic text-[#c8742a]">Garden</span>
        </h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[13.5px] no-underline transition-colors",
                  active
                    ? "text-[#1a1814] font-medium"
                    : "text-[#7a7670] hover:text-[#1a1814]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Search Desktop
          <button
            className={cn(
              "hidden md:flex items-center gap-2",
              "px-3 py-1.5",
              "rounded-md",
              "border border-[#e2ddd5]",
              "bg-[#ede9e1]",
              "transition-all duration-150",
              "hover:border-[#d4cfc6]"
            )}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Search size={13} className="text-[#1a1814]/45" />

            <span className="text-[11px] text-[#b8b4ad]">
              search…
            </span>

            <span
              className={cn(
                "text-[10px]",
                "px-1.5 py-px",
                "rounded-sm",
                "border border-[#e2ddd5]",
                "text-[#b8b4ad]"
              )}
            >
              ⌘K
            </span>
          </button> */}

          {/* Mobile */}
          <Sheet>
            <SheetTrigger
              className={cn(
                "md:hidden",
                "w-9 h-9 rounded-md",
                "flex items-center justify-center",
                "text-[#7a7670]",
                "hover:bg-[#ede9e1] hover:text-[#1a1814]"
              )}
            >
              <MenuIcon size={18} />
            </SheetTrigger>

            <SheetContent
              side="top"
              className="bg-[#f5f2ed] border-[#e2ddd5] pt-14 px-4 pb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link key={item.href} href={item.href}>
                      <SheetClose
                        className={cn(
                          "w-full text-left px-3 py-3 rounded-md text-sm capitalize",
                          active
                            ? "bg-[#1a1814] text-[#f5f2ed]"
                            : "text-[#7a7670] hover:bg-[#ede9e1] hover:text-[#1a1814]"
                        )}
                      >
                        {item.label}
                      </SheetClose>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-[#e2ddd5]">
                {/* <button
                  className={cn(
                    "w-full flex items-center gap-2",
                    "px-3 py-3 rounded-md",
                    "border border-[#e2ddd5]",
                    "bg-[#ede9e1]"
                  )}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <Search size={13} className="text-[#1a1814]/45" />
                  <span className="text-[12px] text-[#b8b4ad]">
                    Search the vault…
                  </span>
                </button> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;