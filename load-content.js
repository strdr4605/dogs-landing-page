const content = {
  title: "Dogs Landing Page",
  info:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat facilisis purus non semper. Etiam pharetraut justo vulputate fermentum. Etiam vehicula dui quis augue consequat feugiat.",
  sectionName: "Our dogs",
  imageLinks: [
    "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_2114.jpg",
    "https://images.dog.ceo/breeds/segugio-italian/n02090722_001.jpg",
    "https://images.dog.ceo/breeds/shihtzu/n02086240_1170.jpg",
    "https://images.dog.ceo/breeds/affenpinscher/n02110627_8621.jpg",
    "https://images.dog.ceo/breeds/terrier-scottish/n02097298_6383.jpg",
  ], 
};

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
