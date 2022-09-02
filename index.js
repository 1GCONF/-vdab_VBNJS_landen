/*
1.17 Landen
De gebruiker typt per land de naam en de oppervlakte. Hij doet dit tot hij stop typt bij de naam.
Toon de gemiddelde oppervlakte van de landen.
Toon de landen met een oppervlakte onder dit gemiddelde.
Toon per land de naam en de oppervlakte.
Toon de landen met een oppervlakte boven dit gemiddelde.
Toon per land de naam en de oppervlakte.
*/

// Helper function
function tikLanden() {
  const landen = [];
  let naam = prompt("land");
  while (naam !== "stop") {
    landen.push({ naam: naam, oppervlakte: prompt("Oppervlakte") });
    naam = prompt("land");
  }
  return landen;
}
const landen = tikLanden();
if (landen.length > 0) {
  function displayAlleLanden(landen_array) {
    landen_array.map((land) => {
      const li = document.createElement("li");
      li.innerHTML = `Land:  ${land.naam} Oppervlakte:  ${land.oppervlakte}`;
      document.querySelector("#landen-ul").appendChild(li);
    });
  }
  function berekenGemiddeldeOppervlakte(landen_array) {
    return landen_array
      .map((land) => land.oppervlakte)
      .reduce((a, b) =>
        Math.round(Number(a) + Number(b) / landen_array.length)
      );
  }
  function displayGemiddelde(gemiddelde) {
    const gem_h2 = document.createElement("h2");
    gem_h2.innerText = `Gemiddelde van alle landen: ${gemiddelde}`;
    document.querySelector("body").append(gem_h2);
    return gem_h2;
  }
  function berekenOnderGemiddelde(landen_array, landen_gemiddelde) {
    return landen_array
      .map((land) => land.oppervlakte)
      .filter((oppervlakte) => {
        return oppervlakte < landen_gemiddelde;
      });
  }
  function displayOnderGemiddelde(onder_gemiddelde_array, landen_array) {
    const result = landen_array.filter((item) =>
      onder_gemiddelde_array.includes(item.oppervlakte)
    );
    const h2 = document.createElement("h2");
    h2.innerText = `Onder gemiddelde: `;
    document.querySelector("#onder-gemiddelde-ul").appendChild(h2);
    result.map((land) => {
      const li = document.createElement("li");
      li.innerHTML = `Land: ${land.naam}, Oppervlakte: ${land.oppervlakte}`;
      document.querySelector("#onder-gemiddelde-ul").appendChild(li);
    });
    return result;
  }
  displayAlleLanden(landen);
  displayGemiddelde(berekenGemiddeldeOppervlakte(landen));
  displayOnderGemiddelde(
    berekenOnderGemiddelde(landen, berekenGemiddeldeOppervlakte(landen)),
    landen
  );
}
