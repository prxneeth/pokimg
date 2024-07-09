// async function ey() {
//   let p1 = new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve("32");
//     }, 1000);
//   });
//   let newp1 = await p1;
//   document.getElementById("firstp").innerHTML = "something's wrong omqqqq";

//   let p2 = new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve("233");
//     }, 1500);
//   });
//   let newp2 = await p2;
//   document.getElementById("secondp").innerHTML = "intializing the hack";
// }

// let a = ey();
// a.then((value) => {
//   console.log(value);
// });
// // ey();
//  ----------------------------------------------------------------
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => response.json())
//   .then((data) => console.log(data.stats))
//   .catch((error) => console.log(error));

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
