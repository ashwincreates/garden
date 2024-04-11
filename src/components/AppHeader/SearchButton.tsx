"use client";
import { useMenuStore } from "@/provider/MenuProvider";
import { Button, IconButton } from "@mui/joy";
import Kbd from "../Miscellaneous/KeyBoard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchButton() {
  const { toggleSearch } = useMenuStore();
  return (
    <>
      <Button
        size="sm"
        sx={{ display: { xs: "none", sm: "inline-flex" }, alignSelf: 'center' }}
        variant={"soft"}
        color="neutral"
        endDecorator={<Kbd>CtrlK</Kbd>}
        onClick={() => {
          toggleSearch();
        }}
      >
        Search..
      </Button>
      <IconButton
        sx={{ display: { xs: "block", sm: "none" } }}
        variant="outlined"
        onClick={() => {
          toggleSearch();
        }}
      >
        <MagnifyingGlassIcon height={16} strokeWidth={2} />
      </IconButton>
    </>
  );
}

export default SearchButton;
