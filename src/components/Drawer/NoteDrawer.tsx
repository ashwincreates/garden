"use client";
import { DialogContent, Drawer } from "@mui/joy";
import NoteList from "../NoteList/NoteList";
import { useMenuStore } from "@/provider/MenuProvider";
import { ReactNode } from "react";

interface NoteDrawerProps {
  children: ReactNode;
}
function NoteDrawer(props: NoteDrawerProps) {
  const { show, toggle } = useMenuStore();
  return (
    <Drawer
      sx={{ md: "block", lg: "none" }}
      open={show}
      onClose={() => toggle()}
    >
      <DialogContent sx={{ scrollbarWidth: "thin" }}>
        {props.children}
      </DialogContent>
    </Drawer>
  );
}

export default NoteDrawer;
