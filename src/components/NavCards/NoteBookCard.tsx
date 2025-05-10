import NextLink from "next/link";
import { Card, CardContent } from "../ui/card";

interface NoteBookCardProps {
  title: string;
  notebook?: string;
}
export function NoteBookCard(props: NoteBookCardProps) {
  const { title, notebook } = props;
  return (
    <Card
      className="h-[150px] transition-all ease-in-outflex flex-col-reverse "
      color="primary"
    >
      <CardContent>
        <NextLink href={`./${notebook}`}>
          <h3 className="text-lg font-semibold leading-none capitalize">
            {title}
          </h3>
        </NextLink>
      </CardContent>
    </Card>
  );
}
