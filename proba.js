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

// let schedule = {};
// const isEmpty = function (obj) {};
// isEmpty(schedule);

// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// return Object
// console.log(isEmpty(schedule));

// // \\
// \\
// \\
// \\
// \\
// \\
// \\
// \\

// console.log();
// isEmpty(schedule); // true

// schedule["8:30"] = "get up";

// console.log();
// isEmpty(schedule); // false

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//   sum = sum + salaries[key];
// }
// console.log(sum);

//  #4
// Создайте функцию multiplyNumeric(obj), которая умножает
// все числовые свойства объекта obj на 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// const multiplyNumeric = function (obj) {
//   // let arr = Object.values(obj);
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// };
// multiplyNumeric(menu);
// console.log(menu);

// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало
//  следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.

// let user = {
//   // name: "Петр",
//   // surname: "Петров",
//   // age: "20 лет",
// };

// let { name = "Аноним", surname = "Анонимович", age = "? лет" } = user;
// console.log(name + " " + surname + " " + age);
//
//
// let [, name, age] = ["Иванов", "Иван", "20 лет"];

// console.log(name); //выведет 'Иван'
// console.log(age); //выведет '20 лет'
//
//
//! FizzBuzz
// Одна из самых популярных на собеседованиях задач.
// Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
//
// for (let i = 1; i <= 20; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else console.log(i);
// }
//
// for (let i = 1; i <= 35; i++) {
//   if (i % 3 === 0) {
//     console.log(i + " = " + "Fizz");
//   } else if (i % 5 === 0) {
//     console.log(i + " = " + "Buzz");
//   } else {
//     console.log(i);
//   }
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i + " = " + "FizzBuzz");
//   }
// }

// const fizzBuzz = function (n) {
//   for (let i = 0; i <= n; i++) {
//     n = 133;
//   }
// };
// fizzBuzz(133);

// Создайте объект calculator(калькулятор) с тремя методами:

// read()(читать) запрашивает два значения и сохраняет их как свойства объекта.
//   sum()(суммировать) возвращает сумму сохранённых значений.
//   mul()(умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//   read() {
//     this.a = +prompt();
//     this.b = +prompt();
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// console.log(calculator);

// const bar = function () {
//   console.log("bar");
// };

// const baz = function () {
//   console.log("baz");
// };

// const foo = function () {
//   console.log("foo");
//   bar();
//   baz();
// };

// foo();

// const petya = {
//   name: "Petya",
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showName();

// ----------
// Напишите ф-цию, которая примает аргументами 2 числа,  задающих диапазон который нужно вывести в консоль
// если в числе есть 3 - в консоль вместо него выводиться "three"
// (то есть вместо 3, 13, 23 и т.д. должно быть "three")
