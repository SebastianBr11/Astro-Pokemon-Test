const fetcher = (url) => async () => {
  const data = await fetch(url);
  const json = await data.json();
  return json;
};

export const pokemon = {
  all: fetcher("https://pokeapi.co/api/v2/pokemon/"),
  fetcher
};
