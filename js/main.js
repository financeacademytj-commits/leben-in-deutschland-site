const bundeslandButtons = document.querySelectorAll(".bundesland-btn");
const bundeslandCardTitle = document.querySelector(".bundesland-card h3");
const bundeslandBuyBtn = document.querySelector(".bundesland-card .btn");

let selectedBundesland = null;

const stripeLink = "https://buy.stripe.com/14AbJ20qF0Sz08CeSN9Ve00";

bundeslandButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.textContent.trim();

    bundeslandButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    selectedBundesland = name;
    bundeslandCardTitle.textContent = `${name} PDF`;
    bundeslandBuyBtn.textContent = `${name} PDF kaufen`;
    bundeslandBuyBtn.href = stripeLink;
    bundeslandBuyBtn.setAttribute("target", "_blank");
    bundeslandBuyBtn.setAttribute("rel", "noopener noreferrer");
  });
});

bundeslandBuyBtn.addEventListener("click", (e) => {
  if (!selectedBundesland) {
    e.preventDefault();
    alert("Bitte zuerst ein Bundesland auswählen.");
  }
});