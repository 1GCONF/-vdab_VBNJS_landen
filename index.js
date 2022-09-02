/*
1.17 Landen
De gebruiker typt per land de naam en de oppervlakte. Hij doet dit tot hij stop typt bij de naam.
Toon de gemiddelde oppervlakte van de landen.
Toon de landen met een oppervlakte onder dit gemiddelde.
Toon per land de naam en de oppervlakte.
*/

// Helper function
function tikLanden() {
  const landen = [];
  let naam = prompt("Land: (Tik \"stop\" om te stoppen)");
  while (naam !== "stop") {
    while (naam !== "stop" && !(/[a-zA-Z]/g.test(naam))){
      naam=prompt(`Foute invoer. Land: `)
    }
    const oppervlakte = ()=>{
      let result=prompt("Oppervlakte: ");
      while(result!=="stop" && !(/[0-9]+/g.test(result))){
        result=prompt(`Foute invoer. Oppervlakte: `);
      }
      return result;
    }
    landen.push({ naam: naam, oppervlakte: oppervlakte()});
    naam = prompt("Land: (Tik \"stop\" om te stoppen)" );
  }
  return landen;
}
const landen = tikLanden();
if (landen.length > 0) {
  function displayAlleLanden(landen_array) {
    landen_array.map((land) => {
      const ul = document.createElement("ul");
      ul.className="landen-ul";
      const li = document.createElement("li");
      li.innerHTML = `Land:  ${land.naam} Oppervlakte:  ${land.oppervlakte}`;
      ul.appendChild(li);
      document.querySelector(".landen-article").appendChild(ul);
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
    gem_h2.className="gemiddelde-title";
    gem_h2.innerText = `Gemiddelde van alle landen: ${gemiddelde}`;
    document.querySelector(".gemiddelde-article").appendChild(gem_h2);
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
    const ul = document.createElement("ul");
    ul.className="onder-gemiddelde-ul";
    const h2 = document.createElement("h2");
    h2.className="onder-gemiddelde-title";
    h2.innerText = `Onder gemiddelde: `;
    document.querySelector(".onder-gemiddelde-article").append(h2,ul);

    const result = landen_array.filter((item) =>
      onder_gemiddelde_array.includes(item.oppervlakte)
    );
    result.map((land) => {
      const li = document.createElement("li");
      li.innerHTML = `Land: ${land.naam}, Oppervlakte: ${land.oppervlakte}`;
      document.querySelector(".onder-gemiddelde-ul").appendChild(li);
    });
    return result;
  }
  function berekenBovenGemiddelde(landen_array, landen_gemiddelde){
    return landen_array
    .map((land) => land.oppervlakte)
    .filter((oppervlakte) => {
      return oppervlakte > landen_gemiddelde;
    });
  }
  function displayBovenGemiddelde(boven_gemiddelde_array, landen_array) {
    const ul = document.createElement("ul");
    ul.className="boven-gemiddelde-ul";
    const h2 = document.createElement("h2");
    h2.className="boven-gemiddelde-title";
    h2.innerText = `Boven gemiddelde: `;
    document.querySelector(".boven-gemiddelde-article").append(h2,ul);

    const result = landen_array.filter((item) =>
      boven_gemiddelde_array.includes(item.oppervlakte)
    );
    result.map((land) => {
      const li = document.createElement("li");
      li.innerHTML = `Land: ${land.naam}, Oppervlakte: ${land.oppervlakte}`;
      document.querySelector(".boven-gemiddelde-ul").appendChild(li);
    });
    return result;
  }
  const gemiddeldeOppervlakte=berekenGemiddeldeOppervlakte(landen);
  const onderGemiddelde=berekenOnderGemiddelde(landen, gemiddeldeOppervlakte);
  const bovenGemiddelde=berekenBovenGemiddelde(landen, gemiddeldeOppervlakte);

  displayAlleLanden(landen);
  displayGemiddelde(gemiddeldeOppervlakte);
  displayOnderGemiddelde(
    onderGemiddelde,
    landen
  )
  displayBovenGemiddelde(
    bovenGemiddelde,
    landen
  );
}
