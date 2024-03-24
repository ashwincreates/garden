import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/server/getNotes";
import { Stack } from "@mui/joy";
import { ReactNode } from "react";

interface NoteBookLayoutProps {
  children: ReactNode;
  params: {
    notebook: string;
  };
}
async function NoteBookLayout({ children, params }: NoteBookLayoutProps) {
  const notes = await getNotes(params.notebook);
  return (
    <Stack direction="row" marginX={{md: 2, lg: "auto"}} maxWidth="lg" marginTop={2}>
      <NoteList notes={notes} notebook={params.notebook} />
      {children}
    </Stack>
  );
}

export default NoteBookLayout;
