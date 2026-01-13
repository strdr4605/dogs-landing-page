console.log("Hello from console");

const lightBg = "rgb(238, 238, 204)";

const body = document.getElementsByTagName("body")[0];
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function (){
  const currentBodyBg = window.getComputedStyle(body).background;

  if (currentBodyBg.includes(lightBg)) {
    body.style.background = "#120";
    body.style.color = "#FFF";

    themeButton.innerText = "☀️"
  } else {
    body.style.background = lightBg;
    body.style.color = "#000";

    themeButton.innerText = "🌑"
  }
})

const consoleBtn = document.getElementById("console-button");

const consoleBtnClick = () => {
  console.log("Hello from console", Math.random());
}

consoleBtn.addEventListener("click", consoleBtnClick);
