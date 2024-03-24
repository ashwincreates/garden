"use client";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import {
  Link,
  List,
  ListItem,
  ListItemButton,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import NavLink from "next/link";
import { usePathname } from "next/navigation";

function NoteList({ notes, notebook }: { notes: string[]; notebook: string }) {
  const pathname = usePathname();
  return (
    <Stack
      maxWidth={300}
      position={"sticky"}
      top={72}
      alignSelf="start"
      height="auto"
    >
      <Sheet
        variant="outlined"
        sx={{
          borderTop: 0,
          borderLeft: 0,
          borderBottom: 0,
          background: "white",
          height: "calc(100vh - 72px)",
        }}
      >
        <Typography
          startDecorator={<DocumentTextIcon height={18} />}
          level="body-sm"
          fontWeight="lg"
          textTransform={"uppercase"}
        >
          {notebook}
        </Typography>
        <List>
          {notes.map((note, index) => {
            const notePath = `/${notebook}/${note}`;
            const isActive = notePath === decodeURI(pathname);
            return (
              <ListItem key={index}>
                <ListItemButton selected={isActive}>
                  <NavLink href={`/${notebook}/${note}`} passHref legacyBehavior>
                    <Link overlay underline="none">
                      <Typography level="body-sm">{note}</Typography>
                    </Link>
                  </NavLink>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Sheet>
    </Stack>
  );
}

export default NoteList;
