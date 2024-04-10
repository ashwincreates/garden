import { Typography } from "@mui/joy";
import { PropsWithChildren } from "react";

function Kbd(props: PropsWithChildren) {
  return (
    <Typography
      component={"kbd"}
      padding={".25rem"}
      boxShadow={"inset 0 -1px 0 0 #cdcdcd"}
      level="body-sm"
      variant="outlined"
      borderRadius="sm"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      {props.children}
    </Typography>
  );
}

export default Kbd;
