"use client";
import { Button } from "../ui/button";
import { Menu } from "lucide-react"

function MenuButton() {
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={() => {
      }}
      className="lg:hidden"
    >
      <Menu />
    </Button>
  );
}

export default MenuButton;
