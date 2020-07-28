// // Задание 1
// *
// Напиши функцию - конструктор Account, которая создает объект
// со свойствами login и email. В prototype функции - конструктора
// добавь метод getInfo(), который выводит в консоль значения полей
// login и email объекта который его вызвал.
// *

// const Account = function ({ login, email }) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function () {
//   const accountInfoMessage = console.log(
//     `Login: ${this.login}, email: ${this.email}`
//   );
//   return accountInfoMessage;
// };
// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// *
// *
// *-----------------------------------
// Задание 2
// *-----------------------------------
// *
// *

// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }

//   getInfo() {
//     const userInfo = console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//     return userInfo;
//   }
//   static show() {
//     console.log(`show!`);
//   }
// }

// const mango = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: "Poly",
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// *
// *
// *-----------------------------------
// Задание 3
// *-----------------------------------
// *
// *

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items = [...this.items, item];
  }
  removeItem(itemName) {
    this.items = this.items.filter((item) => item !== itemName);
  }
}
const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// *
// *
// *-----------------------------------
// Задание 4
// *-----------------------------------
// *
// *

// *
// *
// *-----------------------------------
// Задание 5
// *-----------------------------------
// *
// *
