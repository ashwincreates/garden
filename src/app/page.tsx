import { Card, CardCover } from "@mui/joy";
import heroImage from "../../public/garden.jpg";
import Image from "next/image";
import { getNoteBooks } from "@/server/getNoteBooks";
import NoteBookGrid from "@/components/NavCards/NoteBookGrid";

async function Home() {
  const notebooks = await getNoteBooks();
  return (
    <>
      <Card sx={{ borderRadius: "none", height: 300 }}>
        <CardCover>
          <Image src={heroImage} alt="The Garden" />
        </CardCover>
      </Card>
      <NoteBookGrid notebooks={notebooks} />
    </>
  );
}

export default Home;
