import Markdown from "@/components/Markdown/Markdown";
import Flower from "@/components/Miscellaneous/Flower";
import { getNote } from "@/server/getNote";
import { getNoteBooks } from "@/server/getNoteBooks";
import { getNotes } from "@/server/getNotes";
import { Container, Typography } from "@mui/joy";

export const dynamicParams = false;

export async function generateStaticParams() {
  const notebooks = await getNoteBooks();
  const params = await Promise.all(
    notebooks.map(async (notebook) => {
      const notes = await getNotes(notebook);
      return notes;
    })
  );
  return params.reduce((p, c) => [...p, ...c]);
}

async function Note({ params }: { params: { notebook: string[] } }) {
  const { notebook } = params;
  const content = await getNote(notebook);
  return (
    <Container>
      <Typography paddingY={2} level="h4" textTransform={"capitalize"}>
        {notebook.reverse()[0].replace(/_/g, ' ')}
      </Typography>
      <Markdown content={content} />
      <footer>
        <Typography textAlign={"center"} padding={1}>
          <Flower />
          <Flower />
          <Flower />
        </Typography>
      </footer>
    </Container>
  );
}

export default Note;
