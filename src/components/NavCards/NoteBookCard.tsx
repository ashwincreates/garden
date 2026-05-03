"use client";

import NextLink from "next/link";
import { ChevronRight } from "lucide-react";

interface NoteBookCardProps {
  title: string;
  notebook?: string;
}

export function NoteBookCard(props: NoteBookCardProps) {
  const { title, notebook } = props;

  return (
    <NextLink
      href={`./${notebook}`}
      className={`
        group
        min-h-[160px]
        bg-[#f5f2ed]
        px-6 py-7
        flex flex-col justify-between
        transition-colors duration-150
        hover:bg-[#ede9e1]
      `}
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        {/* Book spine */}
        <div
          className="
            relative
            w-7 h-9
            rounded-[3px]
            border border-[#e8c89a]
            bg-[#faeeda]
            overflow-hidden
            shrink-0
          "
        >
          <span className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#c8742a]" />
          <span className="absolute left-[8px] top-0 bottom-0 w-px bg-black/10" />
        </div>

        <span
          className="text-[11px] text-[#b8b4ad]"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          notebook
        </span>
      </div>

      {/* Bottom */}
      <div>
        <h3
          className="
            text-[18px]
            leading-tight
            text-[#1a1814]
            capitalize
            font-semibold
          "
          style={{ fontFamily: "'Lora', serif" }}
        >
          {title}
        </h3>

        <div className="mt-5 flex items-center gap-2 text-[#b8b4ad] group-hover:text-[#1a1814] transition-colors">
          <span className="text-[11px]">Open notebook</span>
          <ChevronRight size={14} />
        </div>
      </div>
    </NextLink>
  );
}