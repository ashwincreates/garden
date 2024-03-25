import Flower from "@/components/Miscellaneous/Flower";
import { getNote } from "@/server/getNote";
import { Container, Typography } from "@mui/joy";

export const runtime = 'edge';

async function Note({
  params,
}: {
  params: { note: string; notebook: string };
}) {
  const { note, notebook } = params;
  const decodedNote = decodeURI(note);
  const processed = await getNote(notebook, decodedNote);
  return (
    <Container>
      <Typography paddingY={2} level="h4">
        {decodedNote}
      </Typography>
      <article
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: processed }}
      ></article>
      <footer>
        <Typography textAlign={'center'} padding={1}>
          <Flower />
          <Flower />
          <Flower />
        </Typography>
      </footer>
    </Container>
  );
}

export default Note;
