import {
  Container,
  Link,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import NavLink from "next/link";
import MenuButton from "./MenuButton";
import SearchButton from "./SearchButton";

export function AppHeader() {
  return (
    <>
      <Sheet
        variant="outlined"
        sx={{ position: "sticky", top: 0, zIndex: 999 }}
      >
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
            height={56}
            gap={2}
          >
            <Stack direction="row" gap={1}>
              <MenuButton />
              <NavLink href={"/"} passHref legacyBehavior>
                <Link underline="none">
                  <Typography level="title-lg">gumgum's Garden🌼</Typography>
                </Link>
              </NavLink>
            </Stack>
            <SearchButton/>
          </Stack>
        </Container>
      </Sheet>
    </>
  );
}
