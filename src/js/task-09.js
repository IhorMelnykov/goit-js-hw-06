/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const colorContainer = document.querySelector(".widget");
const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", onButtonChangeColor);

function onButtonChangeColor(event) {
	let color = getRandomHexColor();
	body.style.backgroundColor = color;
	colorSpan.textContent = color;
}

