
async function fetchdata() {
  try {
    const pokemoneName = document
      .getElementById("pokiname")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemoneName}`
    );

    if (!response.ok) {
      throw new Error("couldn't fetch");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgele = document.getElementById("pokemonimg");
    imgele.src = pokemonSprite;
    imgele.style.display = "inline-block";
  } catch (error) {
    console.log(error);
  }
}
