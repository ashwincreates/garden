"use client";
import { useMenuStore } from "@/provider/MenuProvider";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { IconButton } from "@mui/joy";

function MenuButton() {
  const { toggle, show } = useMenuStore();
  return (
    <IconButton
      onClick={() => {
        console.log("clicked", show)
        toggle();
      }}
      sx={{ display: { md: "block", lg: "none" } }}
    >
      <Bars2Icon />
    </IconButton>
  );
}

export default MenuButton;
