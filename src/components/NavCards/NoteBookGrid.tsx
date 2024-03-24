"use client"
import { Grid } from "@mui/joy";
import { NoteBookCard } from "./NoteBookCard";

function NoteBookGrid({ notebooks }: { notebooks: string[] }) {
  return (
    <Grid
      container
      maxWidth="md"
      marginX={{ xs: 2, md: "auto" }}
      marginTop={1}
      spacing={2}
    >
      {notebooks.map((notebook) => (
        <Grid xs={12} md={4}>
          <NoteBookCard title={notebook} notebook={notebook}></NoteBookCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default NoteBookGrid;
