import NoteList from "@/components/NoteList/NoteList";
import { Sidebar, SidebarContent, SidebarProvider } from "@/components/ui/sidebar";
import { getContent } from "@/server/getContent";
import { ReactNode } from "react";

export const dynamicParams = false;

interface NoteBookLayoutProps {
  children: ReactNode;
  params: { notebook: string[] };
}
async function NoteBookLayout({ children, params }: NoteBookLayoutProps) {
  const { notebook } = params;
  const notes = await getContent(notebook);
  return (
    <>
      <Sidebar className="top-[56px]">
        <SidebarContent>
          <NoteList
            content={notes.notes}
            heading={notes.heading}
          />
        </SidebarContent>
      </Sidebar>
      {children}
    </>
  );
}

export default NoteBookLayout;
