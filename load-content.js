fetch("data.json")
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
    render(data);
  });


function render(content) {
  console.log(content);

  document.title = content.title;
  const heading1 = document.getElementsByTagName("h1")[0];
  heading1.innerText = content.title;

  const header = document.getElementsByTagName("header")[0];

  const paragraph = document.createElement("p");
  paragraph.innerText = content.info;
  paragraph.setAttribute("id", "info");

  header.after(paragraph);

  // const heading2 = document.getElementsByTagName("h2")[0];
  const heroSection = document.getElementById("hero");
  const heroSectionH2 = heroSection.getElementsByTagName("h2")[0];
  heroSectionH2.innerText = content.sectionName;


  // Add images
  const heroImages = document.getElementById("hero-images");
  // const image = document.createElement("img");
  // image.setAttribute("src", content.imageLinks[0]);
  // heroImages.appendChild(image);

  for (let i = 0; i < content.imageLinks.length; i++) {
    const imageSrc = content.imageLinks[i];
    const image = document.createElement("img");
    image.setAttribute("src", imageSrc);
    heroImages.appendChild(image);
  }

  const suggestedDogString = localStorage.getItem("suggestedDog");
  console.log("suggestedDogFromLocalStorage: ", suggestedDogString);
  const suggestedDogs = JSON.parse(suggestedDogString);
  console.log("suggestedDog: ", suggestedDogs);

  for (let i = 0; i < suggestedDogs.length; i++) {
    const imageSrc = suggestedDogs[i].imageLink;
    const name = suggestedDogs[i].name;

    const image = document.createElement("img");
    image.setAttribute("src", imageSrc);
    image.setAttribute("alt", name);
    heroImages.appendChild(image);
  }
// const suggestedImage = document.createElement("img");
// suggestedImage.setAttribute("src", suggestedDogs.imageLink);
// suggestedImage.setAttribute("alt", suggestedDogs.name);
// heroImages.appendChild(suggestedImage);

}
