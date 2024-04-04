"use server";

import { filterFiles } from "@/lib/fileUtils";
import { Note, toPath } from "@/types/Note";
import { statSync } from "fs";
import { readdir } from "fs/promises";
import path from "path";

const ROOT = "content";

export async function getContent(
  currentNote: Note
): Promise<{ notes: { note: Note }[]; heading: string }> {
  // remove spaces
  const note: Note = currentNote.map((token) => token.replace(/_/g, " "));

  // check if it's a directory
  try {
    // assuming it's a directory
    if (!statSync(path.join(process.cwd(), ROOT, toPath(note))).isDirectory()) {
      // not a directory
      note.pop();
    }
  } catch {
    // not a directory
    note.pop();
  }

  // find other notes
  const notes = await readdir(path.join(process.cwd(), ROOT, ...note), {
    withFileTypes: true,
  });

  const allNotes = notes.map((dirent) =>
    path.relative(
      path.join(process.cwd(), ROOT),
      path.join(
        dirent.path.replace(/ /, "_"),
        dirent.name.replace(/.md/, "").replace(/ /g, "_")
      )
    )
  );

  return {
    notes: allNotes
      .map((notePath) => ({ note: notePath.split(path.sep) as Note }))
      .filter((param) => filterFiles(param.note)),
    heading: [...note].reverse()[0],
  };
}
