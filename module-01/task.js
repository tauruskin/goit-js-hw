"use strict";
// Task 1

// const name = "Генератор защитного поля";
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);
// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов.`);

// Task 2
// const total = 100;
// const ordered = 50;
// let ammount;

// if (total > ordered) {
//   ammount = "На складе недостаточно товаров!";
// } else {
//   ammount = "Заказ оформлен, с вами свяжется менеджер!";
// }
// console.log(ammount);

// // Task 3
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message = prompt("Введите пароль");
// console.log(message);

// if (message === null) {
//   console.log("Отменено пользователем!");
// } else if (message === ADMIN_PASSWORD) {
//   console.log("Добро пожаловать!");
// } else {
//   console.log("Доступ запрещен, неверный пароль!");
// }
// alert(message);

// // Task 4
// let credits = 23580;
// let pricePerDroid = 3000;
// let totalPrice;

// const droidCount = prompt("Колличество дроидов:");

// if (droidCount === null) {
//   console.log("Отменено пользователем!");
// } else {
//   totalPrice = pricePerDroid * droidCount;
//   console.log(droidCount);
// }

// if (totalPrice > credits) {
//   console.log("Недостаточно средств на счету!");
// } else {
//   credits -= totalPrice;
//   console.log(
//     `Вы купили ${droidCount} дроидов, на счету осталось ${credits} кредитов.`
//   );
// }

// Task 5

// const country = prompt("Выберите страну доставки");
// let price;
// let userChoice;

// if (country) {
//   userChoice = country.toLowerCase();
// }

// switch (userChoice) {
//   case "китай":
//     price = 100;
//     break;

//   case "чили":
//     price = 250;
//     break;

//   case "австралия":
//     price = 170;
//     break;

//   case "индия":
//     price = 80;
//     break;

//   case "ямайка":
//     price = 120;
//     break;

//   default:
//     alert("В вашей стране доставка не доступна");
// }

// console.log(`Доставка в ${userChoice} будет стоить ${price} кредитов`);

// Task 6

// let input;
// let total = 0;

// while (input !== null) {
//   input = prompt("Введите число " + total);
//   !isNaN(input)
//     ? (total = total + +input)
//     : alert("Было введено не число, попробуйте еще раз");
// }
// alert(`Общая сумма чисел равна ${total}`);
