const rijeci = ["automobil", "motor", "brod", "romobil"];
let brojPogresaka = 0;
let odabranaRijec = rijeci[Math.floor(Math.random() * rijeci.length)];
console.log(odabranaRijec);

let crtice = Array(odabranaRijec.length + 1).join("_");
let acrtice = [];
for (let i = 0; i < crtice.length; i++) acrtice[i] = crtice[i];
preostala.textContent = acrtice;

btnClick.addEventListener("click", function () {
  if (!odabranaRijec.includes(unos.value)) {
    brojPogresaka++;
    document.querySelector("#brojPogresaka").textContent = brojPogresaka;
    unos.value = "";
    return;
  }
  for (let i = 0; i < odabranaRijec.length; i++) {
    if (odabranaRijec[i] == unos.value) {
      acrtice[i] = unos.value;
      preostala.textContent = acrtice;

      if (!acrtice.includes("_")) {
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".pobjednik").classList.remove("hidden");
        return;
      }
    }
  }
  unos.value = "";
});

ponovno.addEventListener("click", function () {
  unos.value = "";
  document.querySelector("body").style.backgroundColor = "white";
  if (!document.querySelector(".pobjednik").classList.contains("hidden")) {
    document.querySelector(".pobjednik").classList.add("hidden");
  }
  odabranaRijec = rijeci[Math.floor(Math.random() * rijeci.length)];
  console.log(odabranaRijec);
  document.querySelector("#brojPogresaka").textContent = 0;
  crtice = Array(odabranaRijec.length + 1).join("_");
  acrtice = [];
  for (let i = 0; i < crtice.length; i++) acrtice[i] = crtice[i];
  preostala.textContent = acrtice;
});
