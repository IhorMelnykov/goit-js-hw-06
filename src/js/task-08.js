/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const form = document.querySelector(".login-form");
const inputEmail = document.querySelector("input[name='email']");
const inputPassword = document.querySelector("input[name='password']");
const submitBtn = document.querySelector("button");


form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;

	// console.dir(formElements);

	const email = formElements.email.value;
	const password = formElements.password.value;
    
	if (email.length === 0 || password.length === 0) {
		alert("все поля должны быть заполнены");
	}

    
	const formData = {
		email,
		password,
	};
    
	form.reset();

    
	console.log(formData);
}