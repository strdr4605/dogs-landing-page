const breedSelector = document.getElementById("breed");
console.log("breedSelector: ", breedSelector);

const dogImage = document.createElement("img");

breedSelector.addEventListener("change", async (event) => {
  console.log("changed breed selection");
  const breedValue = event.target.value;

  const BREED_URL = "https://dog.ceo/api/breed/" + breedValue + "/images/random";

  const res = await fetch(BREED_URL);
  const data = await res.json();
  console.log("data with async await: ", data);

  const dogImageLink = data.message;

  dogImage.setAttribute("src", dogImageLink);
  dogImage.setAttribute("alt", breedValue);
  dogImage.setAttribute("class", "breed-image");

  const breedSection = document.getElementById("breed-section");

  breedSection.appendChild(dogImage);
});
