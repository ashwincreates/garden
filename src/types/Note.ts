import path from "path";

export type Note = string[];

const toPath = (note: Note) => note.join(path.sep);

export { toPath };
