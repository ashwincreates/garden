import algoliasearch from "algoliasearch";
import { readdir } from "fs/promises";
import path from "path";

const client = algoliasearch("15WSRQBM95", "e71a36bb01ffd53a64a0e257cd4d57f2");

const gardenIndex = await client.initIndex("garden");
gardenIndex.clearObjects();

const contentPath = path.join(process.cwd(), "content");

const notes = await readdir(contentPath, {
  recursive: true,
  withFileTypes: true,
});

const entries = notes
  .filter(
    (dirent) => !dirent.name.startsWith(".") && dirent.name.endsWith(".md")
  )
  .map((dirent, index) => {
    return {
      objectID: new Date().getTime() + index,
      link: path.relative(
        path.join(process.cwd(), "content"),
        path.join(
          dirent.path.replace(/ /, "_"),
          dirent.name.replace(/.md/, "").replace(/ /g, "_")
        )
      ),
      title: dirent.name.replace(/.md/, ""),
    };
  });

gardenIndex.saveObjects(entries).catch((e) => console.log(e));
