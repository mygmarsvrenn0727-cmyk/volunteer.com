const search = document.getElementById("search");

const cards = document.querySelectorAll(".event-card");

search.addEventListener("input", function () {
  let text = search.value.toLowerCase();

  cards.forEach(function (card) {
    let name = card.innerText.toLowerCase();

    if (name.includes(text)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
