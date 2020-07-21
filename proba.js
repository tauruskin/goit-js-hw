// #2
// 1.Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.Добавьте «Рок-н-ролл» в конец.
// 3.Замените значение в середине на «Классика». Ваш код для поиска значения
//  в середине должен работать для массивов с любой длиной.
// 4.Удалите первый элемент массива и покажите его.
// 5.Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// Задача_______________________________________________

// let styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Рок-н-ролл");
// console.log(styles);
// styles[Math.round((styles.length - 1) / 2)] = "Классика";
// console.log(styles);
// console.log(styles.shift());
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// ["Джаз", "Блюз", "Рок-н-ролл"]
// ["Джаз", "Классика", "Блюз", "Рок-н-ролл"]
// Джаз
// ["Рэп", "Регги", "Классика", "Блюз", "Рок-н-ролл"]

// Задача_______________________________________________

// let arr = [5, 2, 1, -10, 8];

// ---------------------------------------
// Камень, ножницы, бумага
// ---------------------------------------

// let userChoice = prompt("Камень, ножницы или бумага?");

// let computerChoice = Math.random();

// if (computerChoice < 0.34) {
//   computerChoice = "камень";
// } else if (computerChoice <= 0.67) {
//   computerChoice = "бумага";
// } else {
//   computerChoice = "ножницы";
// }
// console.log("Computer " + computerChoice);

// const choice1 = userChoice;

// const choice2 = computerChoice;

// const compare = function (choice1, choice2) {
//   if (choice1 === choice2) {
//     return "Ничья!";
//   } else if (choice1 === "камень") {
//     if (choice2 === "ножницы") {
//       return "Камень победил";
//     } else {
//       return "бумага победила";
//     }
//   } else if (choice1 === "бумага") {
//     if (choice2 === "камень") {
//       return "Бумага победила";
//     } else {
//       return "ножницы победили";
//     }
//   } else if (choice1 === "ножницы") {
//     if (choice2 === "бумага") {
//       return "Ножницы победили";
//     } else {
//       return "Камень победил";
//     }
//   }
// };

// console.log(compare(choice1, choice2));

// function ask(question, yes, no) {
//   confirm(question) ? yes() : no();
// }

// ask(
//   "Вы согласны?",
//   function () {
//     alert("Вы согласились.");
//   },
//   function () {
//     alert("Вы отменили выполнение.");
//   }
// );

// Напишите функцию hello(), которая при вызове будет принимать переменную name(например, «Василий») и
// выводить строку(в нашем случае «Привет, Василий»).В случае отсутствующего аргумента выводить «Привет, гость»

// const hello = function (ask = "Василий") {
//   console.log("Привет ", ask);
// };

// hello();

// const key = "person";
// const getKey = function () {
//   return "age";
// };
// const object = {
//   [key]: "Mango",
//   [getKey()]: 2,
// };

// console.log(object);

// const houses = ["Arryn", "Frey", "Greyjoy", "Stark", "Lannister", "Tyrell"];

// // Вертикальная запись удобнее для чтения
// const updatedHouses = [
//   ...houses.slice(0, 1),
//   "Frey of the Crossing",
//   ...houses.slice(2),
// ];

// console.log(updatedHouses);
// // ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']

// const a = { x: 1, y: 2 };
// const b = { x: 10, z: 3 };

// const c = { x: 5, j: 10, z: 15, ...b, ...a };

// console.log(c); // {x: 1, j: 10, y: 2, z: 3}

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// // Объявим переменные и присвоим им значения из объекта
// const { name, stars, status } = hotel;

// console.log(name, stars, status); // "Resort Hotel", 5, undefined
