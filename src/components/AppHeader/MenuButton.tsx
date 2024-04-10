"use client";
import { useMenuStore } from "@/provider/MenuProvider";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { IconButton } from "@mui/joy";

function MenuButton() {
  const { toggle } = useMenuStore();
  return (
    <IconButton
      onClick={() => {
        toggle();
      }}
      sx={{ display: { md: "block", lg: "none" } }}
    >
      <Bars2Icon />
    </IconButton>
  );
}

export default MenuButton;
