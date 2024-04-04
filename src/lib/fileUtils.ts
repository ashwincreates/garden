import { Note } from "@/types/Note";

export function filterFiles(arg: Note) {
  // Only allows directory or .md files
  return !arg.some(
    (token) =>
      (token.startsWith(".") && !token.endsWith(".md")) || token.match(/Index/)
  );
}
