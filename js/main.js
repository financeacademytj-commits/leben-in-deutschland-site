const bundeslandButtons = document.querySelectorAll(".bundesland-btn");
const bundeslandCardTitle = document.querySelector(".bundesland-card h3");
const bundeslandBuyBtn = document.querySelector(".bundesland-card .btn");

let selectedBundesland = null;

const bundeslandLinks = {
  "Baden-Württemberg": "assets/pdfs/baden-wuerttemberg.pdf",
  "Bayern": "assets/pdfs/bayern.pdf",
  "Berlin": "assets/pdfs/berlin.pdf",
  "Brandenburg": "assets/pdfs/brandenburg.pdf",
  "Bremen": "assets/pdfs/bremen.pdf",
  "Hamburg": "assets/pdfs/hamburg.pdf",
  "Hessen": "assets/pdfs/hessen.pdf",
  "Mecklenburg-Vorpommern": "assets/pdfs/mecklenburg-vorpommern.pdf",
  "Niedersachsen": "assets/pdfs/niedersachsen.pdf",
  "Nordrhein-Westfalen": "assets/pdfs/nordrhein-westfalen.pdf",
  "Rheinland-Pfalz": "assets/pdfs/rheinland-pfalz.pdf",
  "Saarland": "assets/pdfs/saarland.pdf",
  "Sachsen": "assets/pdfs/sachsen.pdf",
  "Sachsen-Anhalt": "assets/pdfs/sachsen-anhalt.pdf",
  "Schleswig-Holstein": "assets/pdfs/schleswig-holstein.pdf",
  "Thüringen": "assets/pdfs/thueringen.pdf"
};

bundeslandButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.textContent.trim();

    bundeslandButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    selectedBundesland = name;
    bundeslandCardTitle.textContent = `${name} PDF`;
    bundeslandBuyBtn.textContent = `${name} PDF öffnen`;
    bundeslandBuyBtn.href = bundeslandLinks[name];
    bundeslandBuyBtn.setAttribute("target", "_blank");
  });
});

bundeslandBuyBtn.addEventListener("click", (e) => {
  if (!selectedBundesland) {
    e.preventDefault();
    alert("Bitte zuerst ein Bundesland auswählen.");
  }
});