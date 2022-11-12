/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
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


const galleryEl = document.querySelector(".gallery");

// const elements = images.map(image => {
//   const itemOfGallery = document.createElement("li");
//   const elOfList = document.createElement("img");
//   itemOfGallery.appendChild(elOfList);
//   elOfList.src = image.url ;
//   elOfList.alt = image.alt ;

  
//   return itemOfGallery;
// });

// console.log(elements);

const markup = images
  .map(image => `<li class="gallery__item"><img class="gallery__img" src="${image.url}" alt="${image.alt}"></li>`)
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);



// galleryEl.insertAdjacentHTML("beforeend", elements);