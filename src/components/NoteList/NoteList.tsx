"use client";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { Link, List, ListItem, ListItemButton, Typography } from "@mui/joy";
import NavLink from "next/link";
import { usePathname } from "next/navigation";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { FileText } from "lucide-react";

function NoteList({
  content,
  heading,
}: {
  content: { note: string[] }[];
  heading: string;
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        <NavLink href={`.`}>
          <h5 className="flex gap-2 items-center capitalize text-md">
            <FileText size={16} />
            {heading.replace(/_/g, " ")}
          </h5>
        </NavLink>
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {content.map(({ note }, index) => {
            const notePath = `/${note.join("/").replace(/ /g, "_")}`;
            const isActive = notePath === pathname;
            return (
              <SidebarMenuItem key={index}>
                <NavLink href={notePath}>
                  <SidebarMenuButton className="h-full">
                    {[...note].reverse()[0].replace(/_/g, " ")}
                  </SidebarMenuButton>
                </NavLink>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export default NoteList;
