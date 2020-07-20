// Задание 1

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(i + 1, array[i]);
//   }
// };
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// __________________________________________

// Задание 2

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

// __________________________________________

// // Задание 3

// const findLongestWord = function (string) {
//   let a = 0;
//   let b = 0;
//   const arrayLine = string.split(" ");
//   for (let i = 0; i < arrayLine.length; i++) {
//     if (a < arrayLine[i].length) {
//       a = arrayLine[i].length;
//       b = i;
//     }
//   }
//   return arrayLine[b];
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// __________________________________________

// Задание 4

// __________________________________________

// Задание 5

// __________________________________________

// Задание 6

// __________________________________________

// Задание 7
