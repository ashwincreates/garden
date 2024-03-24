"use server";

import { readdir } from "fs/promises";
import path from "path";

const ROOT = "content";

export async function getNoteBooks(): Promise<string[]> {
  const notebooks = await readdir(path.join(process.cwd(), ROOT));
  return notebooks;
}
