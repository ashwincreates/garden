"use client";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { Link, List, ListItem, ListItemButton, Typography } from "@mui/joy";
import NavLink from "next/link";
import { usePathname } from "next/navigation";

function NoteList({ notes, notebook }: { notes: string[]; notebook: string }) {
  const pathname = usePathname();
  return (
    <>
      <Typography
        sx={{ backgroundColor: "white" }}
        startDecorator={<DocumentTextIcon height={18} />}
        level="body-sm"
        fontWeight="lg"
        textTransform={"uppercase"}
        position={"sticky"}
        top={0}
        variant="soft"
        zIndex={(theme) => theme.zIndex.badge}
      >
        {notebook}
      </Typography>
      <List>
        {notes.map((note, index) => {
          const notePath = `/${notebook}/${note.replace(/ /g, "_")}`;
          const isActive = notePath === pathname;
          return (
            <ListItem key={index}>
              <ListItemButton selected={isActive}>
                <NavLink href={notePath} passHref legacyBehavior>
                  <Link overlay underline="none">
                    <Typography level="body-sm">{note}</Typography>
                  </Link>
                </NavLink>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default NoteList;
