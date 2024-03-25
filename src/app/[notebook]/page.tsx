import { getNote } from "@/server/getNote";
import { getNoteBooks } from "@/server/getNoteBooks";
import { Container, Typography } from "@mui/joy";
import Markdown from "@/components/Markdown/Markdown";

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
