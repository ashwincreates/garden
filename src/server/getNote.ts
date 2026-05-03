import parseMarkdown from "@/lib/parseMd";
import { Note } from "@/types/Note";
import { stat } from "fs/promises";
import { readFile } from "fs/promises";
import path from "path";

const ROOT = "content";

function resolveNotePath(notebook: Note) {
  const basePath = path.join(
    process.cwd(),
    ROOT,
    ...notebook.map((t) => t.replace(/_/g, " ")),
  );

  return {
    basePath,
    indexPath: path.join(basePath, "Index.md"),
    filePath: `${basePath}.md`,
    baseUrl: notebook.at(-1) ?? "",
  };
}

export async function getNote(notebook: Note) {
  const { basePath, indexPath, filePath, baseUrl } = resolveNotePath(notebook);

  let finalPath: string;

  // check if directory
  try {
    const stats = await stat(basePath);
    finalPath = stats.isDirectory() ? indexPath : filePath;
  } catch {
    // fallback to file
    finalPath = filePath;
  }

  let markdown: string;

  try {
    markdown = await readFile(finalPath, "utf-8");
  } catch {
    throw new Error(`Note not found: ${notebook.join("/")}`);
  }

  return parseMarkdown(markdown, baseUrl);
}
