"use client";
import { useMenuStore } from "@/provider/MenuProvider";
import Kbd from "../Miscellaneous/KeyBoard";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

function SearchButton() {
  return (
    <>
      <Button
        size="sm"
        className="hidden sm:inline-flex self-center"
        variant={"outline"}
        color="neutral"
        onClick={() => {
        }}
      >
        Search..
        <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
      </Button>
      <Button
        className="sm:hidden"
        variant="outline"
        onClick={() => {
        }}
      >
        <Search height={16} strokeWidth={2} />
      </Button>
    </>
  );
}

export default SearchButton;
