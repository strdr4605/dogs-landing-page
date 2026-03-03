console.log("Hello from console");

const lightBg = "rgb(238, 238, 204)";

const body = document.getElementsByTagName("body")[0];
const themeButton = document.getElementById("theme-button");

window.addEventListener("load", () => {
  console.log("page is fully loaded");

  const theme = localStorage.getItem("theme");
  console.log("theme: ", theme);

  if (theme === 'dark') {
    body.style.background = "#120";
    body.style.color = "#FFF";

    themeButton.innerText = "☀️"

  } else {
    body.style.background = lightBg;
    body.style.color = "#000";

    themeButton.innerText = "🌑"
  }
});

themeButton.addEventListener("click", function () {
  const currentBodyBg = window.getComputedStyle(body).background;

  if (currentBodyBg.includes(lightBg)) {
    body.style.background = "#120";
    body.style.color = "#FFF";

    themeButton.innerText = "☀️"

    localStorage.setItem("theme", "dark");
  } else {
    body.style.background = lightBg;
    body.style.color = "#000";

    themeButton.innerText = "🌑"

    localStorage.setItem("theme", "light");
  }
})

const consoleBtn = document.getElementById("console-button");

const consoleBtnClick = () => {
  console.log("Hello from console", Math.random());
}

consoleBtn.addEventListener("click", consoleBtnClick);

const dogForm = document.getElementById("dog-form");
console.log("dogForm: ", dogForm);
dogForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("dog form submitted");

  const dogName = dogForm.elements['dog-name'].value;
  console.log("dogName: ", dogName);
  const dogImageLink = dogForm.elements['dog-image'].value;
  console.log("dogImageLink: ", dogImageLink);

  // Get element from page where dogs images are set
  const heroImages = document.getElementById("hero-images");

  // We create a new image and set source (link) and other attributes
  const suggetedDogImage = document.createElement("img");
  suggetedDogImage.setAttribute("src", dogImageLink);
  suggetedDogImage.setAttribute("alt", dogName);

  // We need to add the created image at the end of out container for images
  heroImages.appendChild(suggetedDogImage);


  // Reset form inputs
  dogForm.reset();
});



const yourDogName = document.getElementById("your-dog");
yourDogName.addEventListener("input", (event) => {
  console.log("input change", event.target.value);

  const bestDog = document.getElementById("best-dog");
  bestDog.innerText = "Your dog " + event.target.value + " is the best!!";

  if (event.target.value == "") {
    bestDog.innerText = "";
  }
});
