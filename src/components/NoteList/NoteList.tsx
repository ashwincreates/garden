"use client";

import NavLink from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, FileText, ChevronRight } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { cn } from "@/lib/utils";

function NoteList({
  content,
  heading,
}: {
  content: { note: string[] }[];
  heading: string;
}) {
  const pathname = usePathname();

  return (
    <aside
      className="
        bg-[#1a1814]
        text-[#f5f2ed]
        border-r border-white/5
        flex flex-col
      "
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Brand */}
      <div className="px-6 pt-7 pb-5 border-b border-white/10">
        <p
          className="text-[9px] uppercase tracking-[0.22em] text-[#e8c89a]/70 mb-2"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          personal vault
        </p>

        <h2
          className="text-[22px] leading-tight font-normal text-[#f5f2ed]"
          style={{ fontFamily: "'Lora', serif" }}
        >
          gumgum&apos;s <span className="italic text-[#e8c89a]">Garden</span>
        </h2>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-5 pb-2">
            <span
              className="text-[9px] uppercase tracking-[0.18em] text-white/25"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              notebooks
            </span>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-[2px]">
              {/* Parent */}
              <SidebarMenuItem>
                <NavLink href="." className="block">
                  <SidebarMenuButton
                    className="
                      w-full rounded-none h-auto
                      px-5 py-2.5
                      flex items-center gap-3
                      border-l-2 border-[#c8742a]
                      bg-[#c8742a]/10
                      text-[#e8c89a]
                    "
                  >
                    <BookOpen size={15} />
                    <span className="text-[13.5px]">{heading}</span>

                    <span
                      className="ml-auto text-[10px] px-2 py-[1px] rounded-full bg-white/5 text-white/40"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {content.length}
                    </span>
                  </SidebarMenuButton>
                </NavLink>
              </SidebarMenuItem>

              <div className="max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                {/* Notes */}
                {content.map(({ note }, index) => {
                  const notePath = `/${note.join("/").replace(/ /g, "_")}`;
                  const isActive = pathname === notePath;

                  const title = [...note].reverse()[0].replace(/_/g, " ");

                  return (
                    <SidebarMenuItem key={index}>
                      <NavLink href={notePath} className="block">
                        <SidebarMenuButton
                          className={cn(
                            `
                          w-full rounded-none h-auto
                          px-5 py-2.5
                          flex items-center gap-3
                          border-l-2 transition-all
                          focus:bg-transparent
                        `,
                            isActive
                              ? "border-[#c8742a] bg-[#c8742a]/10 hover:bg-[#c8742a]/15 text-[#e8c89a] hover:text-white/85"
                              : "border-transparent text-white/55 hover:bg-white/5 hover:text-white/85",
                          )}
                        >
                          <FileText size={14} className="shrink-0" />

                          <span className="text-[13px] truncate">{title}</span>

                          <ChevronRight
                            size={13}
                            className="ml-auto opacity-40"
                          />
                        </SidebarMenuButton>
                      </NavLink>
                    </SidebarMenuItem>
                  );
                })}
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </div>

      {/* Footer */}
      {/* <div className="px-5 py-4 border-t border-white/10 flex items-center gap-3">
        <div
          className="
            w-8 h-8 rounded-full
            bg-[#c8742a]
            flex items-center justify-center
            text-white text-sm
          "
          style={{ fontFamily: "'Lora', serif" }}
        >
          G
        </div>

        <div>
          <p className="text-[13px] text-white/70">gumgum</p>
          <p
            className="text-[10px] text-white/30"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {content.length} notes
          </p>
        </div>
      </div> */}
    </aside>
  );
}

export default NoteList;
