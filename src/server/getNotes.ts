"use server";

import { readdir } from "fs/promises";
import path from "path";

const ROOT = "content";

export async function getNotes(notebook: string): Promise<string[]> {
  const notes = await readdir(path.join(process.cwd(), ROOT, notebook));
  return notes
    .filter((note) => note.match(/\.md$/))
    .map((note) => note.replace(/\.md$/, ""));
}
