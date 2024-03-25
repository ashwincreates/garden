import { getNote } from "@/server/getNote";
import { Container, Typography } from "@mui/joy";
import Markdown from "@/components/Markdown/Markdown";

export const runtime = "edge";

async function NoteBook({ params }: { params: { notebook: string } }) {
  const { notebook } = params;
  const content = await getNote(notebook, "Index");
  return (
    <Container component={"article"}>
      <Typography paddingY={2} level="h4" textTransform={"uppercase"}>
        {notebook}
      </Typography>
      <Markdown content={content} />
    </Container>
  );
}

export default NoteBook;
