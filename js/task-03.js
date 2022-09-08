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

const galeryRef = document.querySelector(".gallery");
// console.log(galeryRef);

const addImageMurkup = ({ url, alt }) => {
  // console.log(images);

  return `
  <li class="galery-item" ><img src=${url} alt=${alt} width="500"></li>`;
};

// console.log(addImageMurkup(images[2]));

const createGalery = images.map(addImageMurkup).join("");
console.log(createGalery);

galeryRef.insertAdjacentHTML("beforeend", createGalery);
