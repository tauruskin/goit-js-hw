// Задание 1

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(i + 1, array[i]);
//   }
// };
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// \\--------------------------------
// \\
// \\

// Задание 2 \\

// const calculateEngravingPrice = function (message, pricePerWord) {

//   const arrayCount = message.split(" ");
//   return arrayCount.length * pricePerWord;
// };
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// \\--------------------------------
// \\
// \\

// Задание 3 \\

// const findLongestWord = function (string) {
//   const stringArray = string.split(" ");
//   let longestWord = stringArray[0];

//   for (let i = 1; i < stringArray.length; i += 1) {
//     if (stringArray[i].length > longestWord.length) {
//       longestWord = stringArray[i];
//     }
//   }

//   return longestWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// \\--------------------------------
// \\
// \\

// Задание 4 \\

// const formatString = function (string) {
//   if (string.length <= 40) {
//     return string;
//   }
//   const newString = string.split("").slice(0, 40).join("") + "...";
//   return newString;
// };
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // вернется форматированная строка

// \\--------------------------------
// \\
// \\

// Задание 5

// const checkForSpam = function (message) {
//   if (
//     message.toLowerCase().includes("sale") ||
//     message.toLowerCase().includes("spam")
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// \\--------------------------------
// \\
// \\

// Задание 6

// \\--------------------------------
// \\
// \\

// Задание 7

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   // твой код
// };

// const isLoginUnique = function (allLogins, login) {
//   // твой код
// };

// const addLogin = function (allLogins, login) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
