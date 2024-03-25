import parseMarkdown from "@/lib/parseMd";
import { readFile } from "fs/promises";
import path from "path";

const ROOT = "content";

export async function getNote(notebook: string, note: string = "Index") {
  const markdown = await readFile(
    path.join(process.cwd(), ROOT, notebook, `${note}.md`)
  );
  return parseMarkdown(markdown.toString());
}
