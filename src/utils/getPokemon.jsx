export const getPokemon = async (url) => {
    const res = await fetch(
      url
    );
    return res.json();
  };