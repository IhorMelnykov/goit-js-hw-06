/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];


const listOfIngredients = document.querySelector("#ingredients");

const elements = ingredients.map(ingredient => {
  const elOfList = document.createElement("li");
  elOfList.textContent = ingredient;
    elOfList.classList.add("item");
  
  return elOfList;
});

console.log(elements);


listOfIngredients.append(...elements);











// listOfIngredients.append(lastItem, ..., ..., ....);