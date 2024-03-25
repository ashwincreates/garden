import { getNote } from "@/server/getNote";
import { Container, Typography } from "@mui/joy";

export const runtime = 'edge';

async function NoteBook({ params }: { params: { notebook: string } }) {
  const { notebook } = params;
  const processed = await getNote(notebook, "Index");
  return (
    <Container component={"article"}>
      <Typography paddingY={2} level="h4" textTransform={'uppercase'}>
        {notebook}
      </Typography>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: processed }}
      ></div>
    </Container>
  );
}

export default NoteBook;
