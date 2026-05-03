import { NoteBookCard } from "./NoteBookCard";

function NoteBookGrid({ notebooks }: { notebooks: string[] }) {
  return (
    <section className="w-full border-b border-[#e2ddd5] bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-10">
          <h2
            className="text-[28px] text-[#1a1814] font-normal shrink-0"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Notebooks
          </h2>

          <span
            className="text-[13px] text-[#b8b4ad] shrink-0"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {notebooks.length} collections
          </span>

          <div className="h-px bg-[#e2ddd5] flex-1" />
        </div>

        {/* Grid */}
        <div
          className={`
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-px
            border border-[#e2ddd5]
            rounded-xl
            overflow-hidden
            bg-[#e2ddd5]
          `}
        >
          {notebooks.map((notebook, index) => (
            <NoteBookCard
              key={notebook + index}
              title={notebook}
              notebook={notebook}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NoteBookGrid;