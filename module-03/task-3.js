// Задание 1 Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ: значение используя Object.keys() и for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key}: ${user[key]}`);
// }

// \\------------------------------------------------------------
// Задание 2
// \\------------------------------------------------------------

// const countProps = function (obj) {
//   return Object.entries(obj).length;
// };
// // const countProps = (obj) => {
// //   return Object.entries(obj).length;
// // };

// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// \\------------------------------------------------------------
// Задание 3
// \\------------------------------------------------------------

// const findBestEmployee = function (employees) {
//   const employeeValues = Object.values(employees);
//   let maxValue = employeeValues[1];
//   for (let i = 0; i < employeeValues.length; i++) {
//     if (maxValue < employeeValues[i]) {
//       maxValue = employeeValues[i];
//     }
//     const bestEmployee = employeeValues.indexOf(maxValue);
//     const employeeKeys = Object.keys(employees);
//     return employeeKeys[bestEmployee];
//   }
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// \\------------------------------------------------------------
// Задание 4
// \\------------------------------------------------------------

// const countTotalSalary = function (employees) {
//   const employeeSalary = Object.values(employees);
//   let total = 0;
//   for (const salary of employeeSalary) {
//     total += salary;
//   }
//   return total;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

// \\------------------------------------------------------------
// Задание 5
// \\------------------------------------------------------------

// \\------------------------------------------------------------
// Задание 6
// \\------------------------------------------------------------
