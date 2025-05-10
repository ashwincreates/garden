import { NoteBookCard } from "./NoteBookCard";

function NoteBookGrid({ notebooks }: { notebooks: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl m-auto py-4 px-4">
      {notebooks.map((notebook, index) => (
        <NoteBookCard title={notebook} notebook={notebook}></NoteBookCard>
      ))}
    </div>
  );
}

export default NoteBookGrid;
