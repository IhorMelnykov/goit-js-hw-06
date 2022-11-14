const categoriesOfList = document.querySelectorAll(".item");

console.log("Number of categories:", categoriesOfList.length);

categoriesOfList.forEach(category => {
	console.log("Category:", category.firstElementChild.textContent);
	console.log("Elements:", category.lastElementChild.childElementCount);
});
