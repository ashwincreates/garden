import Markdown from "@/components/Markdown/Markdown";
import Flower from "@/components/Miscellaneous/Flower";
import { getNote } from "@/server/getNote";
import { getNoteBooks } from "@/server/getNoteBooks";
import { getNotes } from "@/server/getNotes";

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
    <div className="p-4 w-full">
      <h3 className="text-lg font-semibold py-2 capitalize">
        {notebook.reverse()[0].replace(/_/g, ' ')}
      </h3>
      <Markdown content={content} />
      <footer>
        <h4 className="p-1 flex justify-center">
          <Flower />
          <Flower />
          <Flower />
        </h4>
      </footer>
    </div>
  );
}

export default Note;
