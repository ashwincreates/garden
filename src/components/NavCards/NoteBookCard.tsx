"use client";
import { Card, CardContent, Link, Typography } from "@mui/joy";
import NextLink from "next/link";
import { useState } from "react";

interface NoteBookCardProps {
  title: string;
  notebook?: string;
}
export function NoteBookCard(props: NoteBookCardProps) {
  const { title, notebook } = props;
  const [hover, setHover] = useState(false);
  return (
    <Card
      sx={{
        flexGrow: 1,
        height: 150,
        transition: "all 50ms ease-in-out",
      }}
      variant={hover ? "solid" : "soft"}
      color="primary"
      invertedColors={true}
    >
      <CardContent sx={{ flexDirection: "column-reverse" }}>
        <NextLink href={`./${notebook}/Index`}>
          <Link
            component="button"
            overlay
            underline="none"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <Typography
              level="body-lg"
              fontWeight="lg"
              textTransform="capitalize"
            >
              {title}
            </Typography>
          </Link>
        </NextLink>
      </CardContent>
    </Card>
  );
}
