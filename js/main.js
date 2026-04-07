const select = document.getElementById("bundesland-select");
const card = document.getElementById("bundesland-card");
const title = document.getElementById("bundesland-title");
const buyBtn = document.getElementById("bundesland-buy-btn");

select.addEventListener("change", () => {
  const value = select.value;

  if (value) {
    title.textContent = value + " PDF";
    buyBtn.textContent = value + " PDF kaufen";
    card.style.display = "block";
  } else {
    title.textContent = "Bundesland PDF";
    buyBtn.textContent = "PDF kaufen";
    card.style.display = "none";
  }
});