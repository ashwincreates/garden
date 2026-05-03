"use client";

import { cn } from "@/lib/utils";

type TOCItem = {
  depth: number;
  value: string;
  id: string;
  children?: TOCItem[];
};

export function TableOfContents({ toc }: { toc: TOCItem[] }) {
  if (!toc?.length) return null;

  // normalize depth (since yours are h6)
  const minDepth = Math.min(...toc.map((t) => t.depth));

  return (
    <aside className="hidden xl:block w-[240px] shrink-0">
      <div className="sticky top-24">
        {/* Header */}
        <p
          className="text-[10px] uppercase tracking-[0.18em] text-[#b8b4ad] mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          on this page
        </p>

        {/* List */}
        <nav className="flex flex-col gap-1">
          {toc.map((item) => {
            const level = item.depth - minDepth;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "block text-[13px] leading-5 transition-colors",
                  "text-[#7a7670] hover:text-[#1a1814] scroll-m-7",

                  // indentation
                  level === 1 && "pl-3",
                  level === 2 && "pl-6",
                  level >= 3 && "pl-8",
                )}
              >
                {item.value}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
