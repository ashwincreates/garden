import parseMarkdown from "@/lib/parseMd";
import { Note } from "@/types/Note";
import { statSync } from "fs";
import { readFile } from "fs/promises";
import path from "path";

const ROOT = "content";

export async function getNote(notebook: Note) {
  let note = path.join(
    process.cwd(),
    ROOT,
    ...notebook.map((token) => token.replace(/_/g, " "))
  );
  let baseUrl = "";
  try {
    // assuming it's a directory
    if (statSync(note).isDirectory()) {
      note = path.join(note, "Index.md");
      baseUrl = [...notebook].reverse()[0];
    }
  } catch {
    // not a directory
    note = `${note}.md`;
  }
  const markdown = await readFile(`${note}`);
  return parseMarkdown(markdown.toString(), baseUrl);
}
