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

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior("Poly", 200, "sword");
// *
// *
// *
// *

// *
// *
// const ShowMeTheHotel = function (name, capacity, stars) {
//     this.name = name;
//     this.capacity = capacity;
//     this.stars = stars;
//     this.greet = function() {
//         console.log(`Hello at ${this.name}`)
//     }
//     this.order = function(n) {
// if(n<this.capacity) {
//     this.capacity -= n;
//     console.log(`you booked ${n} apartments at ${this.name}`)

// } else( console.log('we have no appartments for you'));
//     }
// }

// let Hayyat = new ShowMeTheHotel('Hayat', 500, 5);
// let Hilton = new ShowMeTheHotel('Hilton', 200, 5)

// Hayyat.greet();
// Hayyat.order(1);
// Hayyat.order(50);

// Hilton.greet();
// Hilton.order(10);

// console.log(Hayyat)

// *
// *
// записать в статистику что продано и показать что купили

// const storeStatistics = {
//   pants: 0,
//   shoes: 0,
//   jackets: 0,
// };
// const SellItems = function (type, color, size, quantity) {
//   this.type = type;
//   this.color = color;
//   this.size = size;
//   this.quantity = quantity;

//   this.message = function () {
//     console.log(
//       `Вы заказали: ${this.type}, цвет ${this.color}, размер ${this.size}, в колличестве ${this.quantity}`
//     );
//   };
//   this.counter = function () {
//     if (this.type === "paants") {
//       storeStatistics += this.quantity;
//     } else if (this.type === "shoes") {
//       storeStatistics += this.quantity;
//     } else if (this.type === "jackets") {
//       storeStatistics += this.quantity;
//     } else {
//       console.log("К сожалению, данного товара не существует");
//     }
//   };
// };
// let pants = new SellItems("pants", "black", "M", 3);
// pants.message();
// pants.counter();
// console.log(storeStatistics);
// *
// *
// *
// const obj = {
//   getWidth: function () {
//     return this.width;
//   },
//   width: 5,
// };
// console.log(obj.getWidth());
// *
// *
// const user = {
//   name: "Sasha",
//   age: "30",
//   sayHi: function () {
//     alert(`
//       Hi, my name is ${this.name} and I'm ${this.age} years old!`);
//   },
// };
// setTimeout(function () {
//   user.sayHi();
// }, 1000);
//
// --------------------------------------
//
// 1) Даны два массива: ['a', 'b', 'c'] и[1, 2, 3].Объедините их вместе.
// 2) Дан массив['a', 'b', 'c'].Добавьте ему в конец элементы 1, 2, 3.
// 3) Дан массив[1, 2, 3].Сделайте из него массив[3, 2, 1].
// 4) Дан массив[1, 2, 3, 4, 5].С помощью метода slice запишите в новый элементы[1, 2, 3].
// 5) Дан массив[1, 2, 3, 4, 5].С помощью метода splice преобразуйте массив в[1, 4, 5].
// const a = [1, 2, 3, 4, 5];

//
// 1

// const one = ["a", "b", "c"];
// const two = [1, 2, 3];
// console.log(one + "," + two);

// // 2

// one.push(1, 2, 3);
// console.log(one);

// // 3
// two.reverse();
// console.log(two);
// // 4

// const four = [1, 2, 3, 4, 5];
// console.log(four.slice(0, 3));

// //
// // 5

// four.splice(1, 2);
// console.log(four);

//
// --------------------------------------------------------------
// //
// 1) Вибираємо випадкове число (від 0 до довжини масива);
// 2) -) Записуємо в змінну строку з промта
// -) Зробити строку масивом
// -) Скопіювати масив в нову змінну
// -) Реверсимо масив
// -) З масивів робимо строки

// const a = [1, 2, 3, 4, 5];
// console.log(Math.random(a.length));
//
// function randomNum() {
//   const a = [1, 2, 3, 4, 5];
//   return Math.round;
// }
// console.log(randomNum);
//1

// let input = prompt("write smth");
// console.log(input);

// // 2

// input = input.split("");
// console.log(input);

// // 3
// let arr = input;
// let newArr = [...input];

// // 4

// arr = arr.reverse();
// newArr = newArr.reverse();
// console.log(newArr);

// //  5
// arr = arr.join("");
// newArr = newArr.join(",") + "," + input.reverse().join(",");
// console.log(newArr);

// -------------------------------------
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces" ==> "elbuod  secaps"

// function reverseWords(str) {
//   str = str.split(" ");
//   const res = [];

//   for (let i = 0; i < str.length; i++) {
//     res.push(str[i].split("").reverse().join(""));
//   }
//   return res.join(" ");
// }
// console.log(reverseWords("This is an example!"));
// console.log(reverseWords("double  spaces"));
// //

// const reverseWords = (str) =>
//   str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");

// console.log(reverseWords("This is an example!"));
//
//
// ---------------------------------------------------------------------------
//----My own civilization
//
// let creaturesArr = [];
// class Creature {
//   constructor(type, planet, status, sex) {
//     this.type = type;
//     this.planet = planet;
//     this.status = status;
//     this.sex = sex;
//   }
//   get show() {
//     return `This ${this.type} is from ${this.planet} and has ${this.status} status`;
//   }
//   set changePlanet(str) {
//     this.planet = str;
//     return this.planet;
//   }
//   static intro() {
//     console.log("There is a billions types of creatures all around the world!");
//   }
//   static checkCreatures() {
//     console.log(creaturesArr);
//   }
// }

// class Human extends Creature {
//   constructor(name, type, planet, status, sex, nationality) {
//     super(type, planet, status, sex);
//     this.name = name;
//     this.nationality = nationality;
//   }
//   addToCreaturesList() {
//     creaturesArr.push({
//       name: this.name,
//       planet: this.planet,
//       nationlity: this.nationality,
//     });
//   }
// }

// let Adam = new Human(
//   "Adam",
//   "human",
//   "Mars",
//   "three-dimensional",
//   "male",
//   "Ukrainian"
// );
// Adam.addToCreaturesList();

// let Eva = new Human(
//   "Eva",
//   "human",
//   "Venus",
//   "three-dimensional",
//   "female",
//   "Ukrainian"
// );
// Eva.addToCreaturesList();
// Creature.checkCreatures();

// class Alien extends Creature {
//   constructor(
//     name,
//     type,
//     planet,
//     status,
//     nationality,
//     sex,
//     numberOfEyes,
//     color
//   ) {
//     super(type, planet, status, sex);
//     this.name = name;
//     this.nationality = nationality;
//     this.numberOfEyes = numberOfEyes;
//     this.color = color;
//   }
//   addToCreaturesList() {
//     creaturesArr.push({
//       name: this.name,
//       planet: this.planet,
//       numberOfEyes: this.numberOfEyes,
//       color: this.color,
//     });
//   }
// }

// let Drako = new Alien(
//   "Drako",
//   "alien",
//   "droidland",
//   "three-dimensional",
//   "droidlander",
//   "neutral",
//   "six",
//   "green"
// );
// Drako.addToCreaturesList();
// Creature.checkCreatures();
//
// ---------------------------------------------------------------------
//
//// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства:
//  name (имя, наследуется от User), surname (фамилия, наследуется от User),
//  year (год поступления в вуз).
//  Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс
// студента(от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
// Текущий год получите самостоятельно.

// const currentYear = new Date().getFullYear();

// class User {
//   constructor(name, surname) {
//     this._name = name;
//     this._surname = surname;
//   }

//   getFullName() {
//     return `${this._name} ${this._surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this._year = year;
//   }
//   getCourse() {
//     return currentYear - this._year;
//   }
//   get name() {
//     return this._name;
//   }
//   get surname() {
//     return this._surname;
//   }
//   get year() {
//     return this._year;
//   }
// }
// let student = new Student("Иван", "Иванов", 2003);

// console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.year); //выведет 2017console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2020
//
//
// _------------------------------------------------------
// Выведите с помощью цикла столбец чисел от 1 до 100.
//
// function unusualFive() {
//   return "sasha".length;
// }
// console.log("sasha".length );
//
// Выведите с помощью цикла столбец чисел от 100 до 1.
//
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 100; i >= 1; i--) {
//   console.log(i);

// ------------------------------------------------
//
//Напишем объект user, с свойством name, и методом sayHi()
//
// const user = {
//   name: "Саша",
//   sayHi: function () {
//     console.log("Привет! Меня зовут " + this.name);
//   },
// };
// user.sayHi();
//
//
// ------------------------------------------------------

// class Guesser {
//   constructor(number, lives) {
//     this.number = number;
//     this.lives = lives;
//   }

//   guess(n) {
//     if (!this.lives) throw "No guesses left";
//     if (n === this.number) return true;
//     this.lives--;
//     return false;
//   }
// }

// ----------------------------------------------------------------

// 1)Создать масив в котором запишется каждый элемент исходного масива *2;
// const numbers = [1, 2, 3, 4, 5];
// 2)Создать масив в котором поочерёдно перечисляется длина элементов исходного масиваж
// var arr = ["Есть", "жизнь", "на", "Марсе"];
// 3)Посчитайте все лайки пользователей
// const tweets = [
//        { id: "000", likes: 5, tags: ["js", "nodejs"] },
//        { id: "001", likes: 2, tags: ["html", "css"] },
//        { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//        { id: "003", likes: 8, tags: ["css", "react"] },
//        { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//      ];
// 4)Найдите все обьекты у которых есть тег 'js'(массив tweets);
//
// 5)Создайте функцию которая будет подсчитывать сумму всех переданных ей нечётных(!) аргументов;
//
// 6) Отсортируйте масив по возрасту юзеров;
// let items = [
//   { name: "Миша", age: 23 },
//   { name: "Вася", age: 44 },
//   { name: "Саша", age: 2 },
//   { name: "Рома", age: 99 },
//   { name: "Ашот", age: 19 }
// ];
//
// 7) Замените каждый елемент массива на 0; (Метод fill)
// let x = [1, 2, 3, "a", "b", "c"];
//
// 8) Проверьте есть ли хотя бы один элемент больше 30 ? Верните true / false
// const arr = [10, 20, 30, 40];
//
// 9) Найдите короля района
// let items = [
//   { name: "Миша", age: 23, isTheKingOfNeighbourhood: false },
//   { name: "Вася", age: 44, isTheKingOfNeighbourhood: false },
//   { name: "Саша", age: 2, isTheKingOfNeighbourhood: false },
//   { name: "Рома", age: 99, isTheKingOfNeighbourhood: false },
//   { name: "Ашот", age: 19, isTheKingOfNeighbourhood: true }

//
//----------------------------------------------
// 1
//
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((elem) => {
//   return elem * 2;
// });
// console.log(result);
// console.log(numbers);
// ________________________________
//
// 2
//
// const arr = ["Есть", "жизнь", "на", "Марсе"];
// const arrLength = arr.map((item) => {
//   return item.length;
// });
// console.log(arrLength); // 4,5,2,5
//
// 3
//
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const totalTweets = tweets.reduce((acc, elem) => acc + elem.likes, 0);

// console.log(totalTweets);
//
// 4
//
// const arr = tweets.filter((elem) => elem.tags.includes("js"));
// console.log(arr);
//
// 5)Создайте функцию которая будет подсчитывать сумму всех переданных ей нечётных(!) аргументов;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const sum = numbers.reduce((acc, elem) => acc + elem, 0);
// console.log(sum);
//
// другой вариант--------------------------------------------------
//
// const fn = function (...arr) {
//   console.log(arr);
//   let sum = arr.reduce((acc, el) => {
//     el % 2 !== 0 ? (acc += el) : "";
//     return acc;
//   }, 0);
//   return sum;
// };
// console.log(fn(1, 2, 3, 4, 5));
//
//
// 6) Отсортируйте масив по возрасту юзеров;
//

// let items = [
//   { name: "Миша", age: 23 },
//   { name: "Вася", age: 44 },
//   { name: "Саша", age: 2 },
//   { name: "Рома", age: 99 },
//   { name: "Ашот", age: 19 },
// ];
// const sortByAge = () => {
//   items.sort((a, b) => (a.age > b.age ? 1 : -1));
// };
// sortByAge(items);
// console.log(items);
//
//
// 7) Замените каждый елемент массива на 0; (Метод fill)
//
// let x = [1, 2, 3, "a", "b", "c"];
// console.log(x.fill(0));

//
//
// 8) Проверьте есть ли хотя бы один элемент больше 30 ? Верните true / false
//
// const arr = [10, 20, 30, 40];
// console.log(arr.some((num) => num > 30));
//
// 9) Найдите короля района

// let items = [
//   { name: "Миша", age: 23, isTheKingOfNeighbourhood: false },
//   { name: "Вася", age: 44, isTheKingOfNeighbourhood: false },
//   { name: "Саша", age: 2, isTheKingOfNeighbourhood: false },
//   { name: "Рома", age: 99, isTheKingOfNeighbourhood: false },
//   { name: "Ашот", age: 19, isTheKingOfNeighbourhood: true },
// ];
// console.log(items.find((item) => item.isTheKingOfNeighbourhood));

//
//
//
// 10) Поменяйте статус юзера на "неактивен", если daysInactive больше 10;
// const users = [
//   { name: "Mango", daysInactive: 10, isActive: true },
//   { name: "Poly", daysInactive: 5, isActive: true },
//   { name: "Ajax", daysInactive: 12, isActive: true },
// ];
// //
// users.forEach((user) => {
//   if (user.daysInactive > 10) {
//     user.isActive = false;
//   }
// });
// console.log(users);

// 11) Создайте ф - цию которая принимает строку и возвращает её записанную "Заборчиком"(ПрИвЕт)
//
// const camelC = (word) => {
//   const newAr = [...word];
//   const resultC = newAr.reduce((acc, char, index) => {
//     if (index % 2 != 0) {
//       acc += char.toLowerCase();
//     } else {
//       acc += char.toUpperCase();
//     }
//     return acc;
//   }, "");
//   return resultC;
// };

// console.log(camelC("Привет"));
//
// ------------------------------------------------
// ------------------------------DOM-------------------------------------
// ------------------------------------------------
//
// Создать красный круг
//

// let body = document.querySelector("body");
// let box = document.createElement("div");
// body.append(box);
// console.log(box);
// // box.style.width = "60px";
// // box.style.height = "60px";
// // box.style.margin = "0 auto";
// // box.style.backgroundColor = "teal";
// // box.style.borderRadius = "50%";
// //
// // box.setAttribute("class", "box");
// for (let i = 0; i < 20; i++) {
//   let smallBox = document.createElement("div");
//   box.append(smallBox);
//   smallBox.classList.add("smallBox");

//   smallBox.style.backgroundColor = `rgb(${Math.round(
//     Math.random() * 255
//   )}, ${Math.round(Math.random() * 255)})`;
// }
