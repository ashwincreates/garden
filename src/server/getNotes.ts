"use server";

import { filterFiles } from "@/lib/fileUtils";
import { readdir } from "fs/promises";
import path from "path";

const ROOT = "content";

export async function getNotes(
  notebook: string
): Promise<{ notebook: string[] }[]> {
  const notes = await readdir(path.join(process.cwd(), ROOT, notebook), {
    recursive: true,
    withFileTypes: true,
  });
  const pathToNotes = notes.map((dirent) =>
    path.relative(
      path.join(process.cwd(), ROOT),
      path.join(
        dirent.path.replace(/ /, "_"),
        dirent.name.replace(/.md/, "").replace(/ /g, "_")
      )
    )
  );

  pathToNotes.push(notebook);

  return pathToNotes
    .map((notePath) => ({ notebook: notePath.split(path.sep) }))
    .filter((notePath) => filterFiles(notePath.notebook));
}
