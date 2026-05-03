import AppHeader from "@/components/AppHeader/AppHeader";
import Markdown from "@/components/Markdown/Markdown";
import { TableOfContents } from "@/components/Markdown/TOC";
import Flower from "@/components/Miscellaneous/Flower";
import { getNote } from "@/server/getNote";
import { getNoteBooks } from "@/server/getNoteBooks";
import { getNotes } from "@/server/getNotes";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const notebooks = await getNoteBooks();
  const params = await Promise.all(
    notebooks.map(async (notebook) => {
      const notes = await getNotes(notebook);
      return notes;
    }),
  );
  return params.reduce((p, c) => [...p, ...c]);
}

async function Note({ params }: { params: { notebook: string[] } }) {
  const { notebook } = params;
  const content = await getNote(notebook).catch((e) => {
    console.log(e);
    notFound();
  });

  const title = notebook[notebook.length - 1].replace(/_/g, " ");
  const notebookName = notebook[0];

  return (
    <div
      className="min-h-screen bg-[#f5f2ed]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="md:ml-[16rem]">
        {/* Top bar */}
        <div
          className="sticky top-0 z-10 flex items-center gap-2 px-8 h-[52px] border-b border-[#e2ddd5]"
          style={{
            background: "rgba(245,242,237,0.92)",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="text-[#b8b4ad] text-sm">The Garden</span>
          <span className="text-[#d4cfc6] text-sm">/</span>
          <span
            className="text-[#7a7670] text-sm capitalize"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {notebookName}
          </span>
          <span className="text-[#d4cfc6] text-sm">/</span>
          <span className="text-[#3d3a34] text-sm font-medium capitalize">
            {title}
          </span>
        </div>

        <div className="flex justify-center">
          {/* Content */}
          <div className="max-w-[680px] mx-auto px-8 py-14">
            {/* Note header */}
            <header className="mb-10 pb-8 border-b border-[#e2ddd5]">
              <div
                className="flex items-center gap-2 mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="w-[5px] h-[5px] rounded-full bg-[#c8742a] flex-shrink-0" />
                <span className="text-[10px] text-[#c8742a] uppercase tracking-[0.18em]">
                  {notebookName}
                </span>
                <span className="text-[#d4cfc6] text-xs">·</span>
                <span className="text-[10px] text-[#b8b4ad] uppercase tracking-[0.18em]">
                  .md
                </span>
              </div>
              <h1
                className="text-[36px] leading-[1.15] font-normal text-[#1a1814] capitalize"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  letterSpacing: "-0.3px",
                }}
              >
                {title}
              </h1>
            </header>

            {/* Markdown body */}
            <article className="note-body">
              <Markdown content={content.markdown} />
            </article>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-[#e2ddd5] flex flex-col items-center gap-3">
              <div className="flex items-center gap-1 text-[#c8742a] opacity-60">
                <Flower />
                <Flower />
                <Flower />
              </div>
              <p
                className="text-[11px] text-[#b8b4ad] tracking-[0.12em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                end of note
              </p>
            </footer>
          </div>
          <TableOfContents toc={content.toc as any} />
        </div>
      </div>
    </div>
  );
}

export default Note;
