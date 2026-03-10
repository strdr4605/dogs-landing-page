const breedSelector = document.getElementById("breed");
console.log("breedSelector: ", breedSelector);

const dogImage = document.createElement("img");

breedSelector.addEventListener("change", (event) => {
  console.log("changed breed selection");
  const breedValue = event.target.value;

  const BREED_URL = "https://dog.ceo/api/breed/" + breedValue + "/images/random";

  fetch(BREED_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const dogImageLink = data.message;

      dogImage.setAttribute("src", dogImageLink);
      dogImage.setAttribute("alt", breedValue);
      dogImage.setAttribute("class", "breed-image");

      const breedSection = document.getElementById("breed-section");

      breedSection.appendChild(dogImage);
    });
});
