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

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items = [...this.items, item];
//   }
//   removeItem(itemName) {
//     this.items = this.items.filter((item) => item !== itemName);
//   }
// }
// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// *
// *
// *-----------------------------------
// Задание 4
// *-----------------------------------
// *
// *

// class StringBuilder {
//   constructor(string) {
//     this._value = string;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value = this._value + str;
//   }

//   prepend(str) {
//     this._value = str + this._value;
//   }

//   pad(str) {
//     this._value = str + this._value + str;
//   }
// }

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// *
// *
// *-----------------------------------
// Задание 5
// *-----------------------------------
// *
// *
// class Car {
//   static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
//     const getSpecsMessage = console.log(
//       `Max speed: ${maxSpeed}, Speed: ${speed}, Is on: ${isOn}, Distance: ${distance}, Price: ${price}`
//     );
//     return getSpecsMessage;
//   }
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//     this.speed = speed;
//     this.price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = isOn;
//     this.distance = distance;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(newPrice) {
//     this._price = newPrice;
//   }
//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true;
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     if (value + this.speed <= this.maxSpeed) {
//       this.speed += value;
//     }
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     if (this.speed - value >= 0) {
//       this.speed -= value;
//     }
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if (this.isOn) {
//       this.distance += hours * this.speed;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
