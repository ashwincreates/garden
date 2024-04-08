import algoliasearch from "algoliasearch";

const client = algoliasearch("15WSRQBM95", "e71a36bb01ffd53a64a0e257cd4d57f2");

const gardenIndex = await client.initIndex("garden");

const record = {
  objectID: "1e2k3jejk2ejj",
  name: "ashwin",
  description: "Heheheheheheh",
};

//   await gardenIndex.saveObject(record).catch((e) => console.log(e))
gardenIndex.search("hello").catch(e => console.log(e));
