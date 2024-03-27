"use client";
import { DialogContent, Drawer } from "@mui/joy";
import NoteList from "../NoteList/NoteList";
import { useMenuStore } from "@/provider/MenuProvider";

interface NoteDrawerProps {
  notes: string[];
  notebook: string;
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
        <NoteList {...props} />
      </DialogContent>
    </Drawer>
  );
}

export default NoteDrawer;
