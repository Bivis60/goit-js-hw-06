const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryImage = document.querySelector(".gallery");

const galleryEl = images.map((element) => `<li><img src = ${element.url} alt = ${element.alt} width = 320></img></li>`).join("");

galleryImage.insertAdjacentHTML("beforeend", galleryEl);
galleryImage.style.listStyle = "none";
galleryImage.style.display = "flex";
galleryImage.style.gap = "30px";
galleryImage.style.flexWrap = "wrap";
galleryImage.style.alignContent= "space-between";
galleryImage.style.justifyContent= "space-around";
galleryImage.style.alignItems= "center";
