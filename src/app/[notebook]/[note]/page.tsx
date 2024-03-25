import Markdown from "@/components/Markdown/Markdown";
import Flower from "@/components/Miscellaneous/Flower";
import { getNote } from "@/server/getNote";
import { getNoteBooks } from "@/server/getNoteBooks";
import { getNotes } from "@/server/getNotes";
import { Container, Typography } from "@mui/joy";

export async function generateStaticParams() {
  const notebooks = await getNoteBooks();
  const params = await Promise.all(
    notebooks.map(async (notebook) => {
      const notes = await getNotes(notebook);
      const data = await Promise.all(
        notes.map(async (note) => {
          return {
            note,
            notebook,
          };
        })
      );
      return data;
    })
  );

  return params.reduce((p, c) => [...p, ...c], []);
}

async function Note({
  params,
}: {
  params: { note: string; notebook: string };
}) {
  const { note, notebook } = params;
  const decodedNote = decodeURI(note);
  const content = await getNote(notebook, decodedNote)
  return (
    <Container>
      <Typography paddingY={2} level="h4">
        {decodedNote}
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
