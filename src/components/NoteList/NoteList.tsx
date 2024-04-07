"use client";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { Link, List, ListItem, ListItemButton, Typography } from "@mui/joy";
import NavLink from "next/link";
import { usePathname } from "next/navigation";

function NoteList({
  content,
  heading,
}: {
  content: { note: string[] }[];
  heading: string;
}) {
  const pathname = usePathname();

  return (
    <>
      <NavLink href={`.`} passHref legacyBehavior>
        <Link
          underline="none"
          sx={{width: "100%", position: "sticky", top: 0, zIndex: (theme) => theme.zIndex.badge }}
          color="neutral"
        >
          <Typography
            sx={{ backgroundColor: "white" }}
            startDecorator={<DocumentTextIcon height={18} />}
            level="body-sm"
            fontWeight="lg"
            width={"100%"}
            textTransform={"uppercase"}
            variant="soft"
          >
            {heading.replace(/_/g, " ")}
          </Typography>
        </Link>
      </NavLink>
      <List>
        {content.map(({ note }, index) => {
          const notePath = `/${note.join("/").replace(/ /g, "_")}`;
          const isActive = notePath === pathname;
          return (
            <ListItem key={index}>
              <ListItemButton selected={isActive}>
                <NavLink href={notePath} passHref legacyBehavior>
                  <Link overlay underline="none">
                    <Typography level="body-sm">
                      {[...note].reverse()[0].replace(/_/g, " ")}
                    </Typography>
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
