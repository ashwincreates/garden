import BreadCrumbHeader from "@/components/BreadCrumbs/BreadCrumb";
import NoteDrawer from "@/components/Drawer/NoteDrawer";
import NoteList from "@/components/NoteList/NoteList";
import { getNoteBooks } from "@/server/getNoteBooks";
import { getNotes } from "@/server/getNotes";
import { Container, Sheet, Stack } from "@mui/joy";
import { ReactNode } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const notebooks = await getNoteBooks();
  const params = await Promise.all(
    notebooks.map(async (notebook) => {
      return {
        notebook,
      };
    })
  );

  return params;
}

interface NoteBookLayoutProps {
  children: ReactNode;
  params: {
    notebook: string;
  };
}
async function NoteBookLayout({ children, params }: NoteBookLayoutProps) {
  const notes = await getNotes(params.notebook);
  return (
    <Stack
      direction="row"
      marginX={{ md: 2, lg: "auto" }}
      maxWidth="lg"
      marginTop={2}
    >
      <Stack
        maxWidth={300}
        position={"sticky"}
        top={72}
        display={{ xs: "none", md: "block" }}
        alignSelf="start"
        height="auto"
      >
        <Sheet
          variant="outlined"
          sx={{
            borderTop: 0,
            borderLeft: 0,
            borderBottom: 0,
            background: "white",
            height: "calc(100vh - 72px)",
            overflowY: "auto",
            scrollbarWidth: "thin",
          }}
        >
          <NoteList notes={notes} notebook={params.notebook} />
        </Sheet>
      </Stack>
      <NoteDrawer notes={notes} notebook={params.notebook} />
      {children}
    </Stack>
  );
}

export default NoteBookLayout;
