"use client"
import NextLink from "next/link";
import { Card, CardContent } from "../ui/card";

interface NoteBookCardProps {
  title: string;
  notebook?: string;
}
export function NoteBookCard(props: NoteBookCardProps) {
  const { title, notebook } = props;
  return (
    <NextLink className="h-[150px] rounded border p-6 flex flex-col-reverse bg-accent hover:bg-secondary" href={`./${notebook}`}>
      <h3 className="text-lg font-semibold leading-none capitalize">
        {title}
      </h3>
    </NextLink>
  );
}
