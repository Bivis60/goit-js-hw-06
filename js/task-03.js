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

const galleryEl = images.map((element) => {
  const galleryList = document.createElement("li");
  const galleryItem = document.createElement("img");
  galleryItem.src = element.url;
  galleryItem.alt = element.alt;
  galleryItem.width = 320;
  galleryList.appendChild(galleryItem);
  console.log(galleryItem);
  return galleryList;
});

galleryImage.append(...galleryEl);
