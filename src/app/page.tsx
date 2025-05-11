import heroImage from "../../public/garden.jpg";
import Image from "next/image";
import { getNoteBooks } from "@/server/getNoteBooks";
import NoteBookGrid from "@/components/NavCards/NoteBookGrid";
import { AppHeader } from "@/components/AppHeader/AppHeader";

async function Home() {
  const notebooks = await getNoteBooks();
  return (
    <>
      <AppHeader />
      <div>
        <div className="overflow-hidden">
          <Image className="h-[400px] object-cover" src={heroImage} alt="The Garden" />
        </div>
        <NoteBookGrid notebooks={notebooks} />
      </div>
    </>
  );
}

export default Home;
