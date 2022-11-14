const categoriesOfList = document.querySelectorAll(".item");

console.log("Number of categories:", categoriesOfList.length);

const titleFirst = document.querySelectorAll("h2");
console.log("Category:", titleFirst[0].textContent);

const category = document.querySelector("#categories");
const firstCategory = category.firstElementChild;
const partOfFirstCategory = firstCategory.querySelectorAll("li");
console.log("Elements:", partOfFirstCategory.length);

const titleSecond = document.querySelectorAll("h2");
console.log("Category:", titleSecond[1].textContent);

const secondCategory = firstCategory.nextElementSibling;
const partOfSecondCategory = secondCategory.querySelectorAll("li");
console.log("Elements:", partOfSecondCategory.length);

const titleThird = document.querySelectorAll("h2");
console.log("Category:", titleThird[2].textContent);

const thirdCategory = category.lastElementChild;
const partOfThirdCategory = thirdCategory.querySelectorAll("li");
console.log("Elements:", partOfThirdCategory.length);