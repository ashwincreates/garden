"use client";
import { DialogContent, Drawer } from "@mui/joy";
import { useMenuStore } from "@/provider/MenuProvider";
import { ReactNode } from "react";

interface NoteDrawerProps {
  children: ReactNode;
}
function NoteDrawer(props: NoteDrawerProps) {
  return (
    <Drawer
      sx={{ display: { md: "block", lg: "none" } }}
      open={false}
      onClose={() => {}}
    >
      <DialogContent sx={{ scrollbarWidth: "thin", paddingLeft: "1rem", paddingTop: "1rem" }}>
        {props.children}
      </DialogContent>
    </Drawer>
  );
}

export default NoteDrawer;
