import { Container, Link, Sheet, Stack, Typography } from "@mui/joy";
import NavLink from "next/link";

export function AppHeader() {
  return (
    <>
      <Sheet variant="outlined" sx={{ position: "sticky", top: 0, zIndex: 999 }}>
        <Container>
          <Stack direction="row" alignItems="center" height={56}>
            <NavLink href={"/"} passHref legacyBehavior>
              <Link underline="none">
                <Typography level="title-lg">gumgum's Garden🌼</Typography>
              </Link>
            </NavLink>
          </Stack>
        </Container>
      </Sheet>
    </>
  );
}
