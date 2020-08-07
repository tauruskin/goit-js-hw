// const categoriesRef = document.querySelector("#categories");

// const liItemRefArray = categoriesRef.querySelectorAll(".item");

// const categoriesQuantity = function (arr) {
//   return console.log(`В списке ${arr.length} категории.`);
// };

// const categoriesInfo = function (arr) {
//   return arr.forEach((item) =>
//     console.log(
//       `Категория: ${
//         item.querySelector("h2").textContent
//       } Количество элементов: ${item.querySelectorAll("li").length}`
//     )
//   );
// };
// categoriesQuantity(liItemRefArray);
// categoriesInfo(liItemRefArray);

//
// --------------------------------------------
// Задание 2
// --------------------------------------------
//

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// const ingredientsRef = document.querySelector("#ingredients");
// const ingredientsRefArray = ingredients.map((ingredient) => {
//   const ingRef = document.createElement("li");
//   ingRef.textContent = ingredient;
//   return ingRef;
// });
// ingredientsRef.append(...ingredientsRefArray);

//
// --------------------------------------------
// Задание 3
// --------------------------------------------

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const galleryRef = document.querySelector("#gallery");

// const imagesArray = images.reduce((acc, image) => {
//   return (acc += `<li class='item'>
//   <img class='item_img' src = "${image.url}" alt = "${image.alt}" width="250" height="250">
//   </li>`);
// }, "");

// galleryRef.insertAdjacentHTML("afterbegin", imagesArray);

// --------------------------------------------
// Задание 4
// --------------------------------------------
//

// const counterValue = document.querySelector("#value");

// const incrementButton = document.querySelector(`[data-action="increment"]`);
// const decrementButton = document.querySelector(`[data-action="decrement"]`);

// incrementButton.addEventListener("click", increment);
// decrementButton.addEventListener("click", decrement);

// function increment() {
//   counterValue.textContent = Number(counterValue.textContent) + 1;
// // counterValue.textContent++
// }
// function decrement() {
//   counterValue.textContent -= 1;
// }

//

//
// --------------------------------------------
// Задание 5
// --------------------------------------------

// const inputIn = document.querySelector("#name-input");
// const inputOut = document.querySelector("#name-output");

// inputIn.addEventListener("input", inputChangeOut);

// function inputChangeOut(event) {
//   inputOut.textContent = event.target.value;
//   if (inputOut.textContent === "") {
//     inputOut.textContent = "незнакомец";
//   }
// }
//

//
// --------------------------------------------
// Задание 6
// --------------------------------------------
//

// const input = document.querySelector("#validation-input");

// input.addEventListener("input", (e) => {
//   if (e.target.value.length < e.target.getAttribute("data-length")) {
//     input.setAttribute("class", "invalid");
//   } else {
//     input.setAttribute("class", "valid");
//   }
// });

//
// --------------------------------------------
// Задание 7
// --------------------------------------------
//

// const formSize = document.querySelector("#font-size-control");
// const formSpan = document.querySelector("#text");

// formSize.addEventListener("input", changeFont);

// function changeFont() {
//   formSpan.style.fontSize = `${formSize.value}px`;
// }

//
// --------------------------------------------
// Задание 8 (ще не зробив, колись дороблю:)) )
// --------------------------------------------
//

// const collection = document.querySelector("#boxes");
// const input = document.querySelector("#controls input");
// const createCollection = document.querySelector(`[data-action="render"]`);
// const deleteCollection = document.querySelector(`[data-action="destroy"]`);

// createCollection.addEventListener("click", createBoxes);
// deleteCollection.addEventListener("click", clearCollection);

// function createBoxes(amount) {
//   clearCollection();
// }

// if (amount >= 1) {
//   let boxArr = [];
//   let box;
// }
