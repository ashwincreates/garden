import NoteDrawer from "@/components/Drawer/NoteDrawer";
import NoteList from "@/components/NoteList/NoteList";
import { getContent } from "@/server/getContent";
import { Sheet, Stack } from "@mui/joy";
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
    <Stack
      direction="row"
      marginX={{ md: 2, lg: "auto" }}
      maxWidth="lg"
      marginTop={2}
    >
      <Stack
        position={"sticky"}
        top={72}
        display={{ xs: "none", md: "block" }}
        alignSelf="start"
        height="auto"
      >
        <Sheet
          variant="outlined"
          sx={{
            width: 300,
            borderTop: 0,
            borderLeft: 0,
            borderBottom: 0,
            background: "white",
            height: "calc(100vh - 72px)",
            overflowY: "auto",
            scrollbarWidth: "thin",
          }}
        >
          <NoteList
            content={notes.notes}
            heading={notes.heading}
          />
        </Sheet>
      </Stack>
      <NoteDrawer>
        <NoteList
          content={notes.notes}
          heading={notes.heading}
        />
      </NoteDrawer>
      {children}
    </Stack>
  );
}

export default NoteBookLayout;
