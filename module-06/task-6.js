import products from "./products.js";

// *****************************************************
// Задание 1
// *****************************************************
//
// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };
// console.log(getUserNames(products));

// [
//   "Moore Hensley",
//   "Sharlene Bush",
//   "Ross Vazquez",
//   "Elma Head",
//   "Carey Barr",
//   "Blackburn Dotson",
//   "Sheree Anthony",
// ];

//
// *****************************************************
// Задание 2
// *****************************************************
//

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };
// console.log(getUsersWithEyeColor(products, "blue"));

// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
//

//
// *****************************************************
// Задание 3
// *****************************************************
//

// const getUsersWithGender = (users, gender) => {
//   return users.filter((user) => user.gender === gender);
// };
// console.log(getUsersWithGender(products, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//

// *****************************************************
// Задание 4
// *****************************************************
//

// const getInactiveUsers = (users) => {
//   return users.filter((user) => !user.isActive);
// };
// console.log(getInactiveUsers(products)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
//

// *****************************************************
// Задание 5
// *****************************************************
//

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };
// console.log(getUserWithEmail(products, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(products, "elmahead@omatom.com")); // {объект пользователя Elma Head}
//

// *****************************************************
// Задание 6
// *****************************************************
//

// const getUsersWithAge = (users, min, max) => {
//   return users.filter((user) => user.age >= min && user.age <= max);
// };
// console.log(getUsersWithAge(products, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(products, 30, 40));
//
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
//

// *****************************************************
// Задание 7
// *****************************************************
//

// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, user) => acc + user.balance, 0);
// };
// console.log(calculateTotalBalance(products)); // 20916
//

// *****************************************************
// Задание 8
// *****************************************************
//

// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .map((user) =>
//       user.friends.some((friend) => friend === friendName) ? user.name : " "
//     )
//     .filter((name) => name !== " ");
// };
// console.log(getUsersWithFriend(products, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(products, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
//

// *****************************************************
// Задание 9
// *****************************************************
//

// const getNamesSortedByFriendsCount = (users) => {
//   return users.sort((a, b) => a.friends.length - b.friends.length);
// };

// const getNamesSortedByFriendsCount = (users) => {
//   let result = [...users];
//   const arr = result
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((elem) => {
//       return elem.name;
//     });
//   return arr;
// };

// console.log(getNamesSortedByFriendsCount(products));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// *****************************************************
// Задание 10
// *****************************************************
//
// const getSortedUniqueSkills = (users) => {
//   const result = users
//     .reduce((allSkills, elem) => {
//       elem.skills.forEach((item) => {
//         !allSkills.includes(item) ? allSkills.push(item) : "";
//       });
//       return allSkills;
//     }, [])
//     .sort();

//   return result;
// };
// console.log(getSortedUniqueSkills(products));

//
// ________________________________2 вариант_______________________________

// const getSortedUniqueSkills = (users) => {
//   return users
//     .flatMap((user) => user.skills)
//     .sort()
//     .filter((skills, index, arr) => arr.indexOf(skills) === index);
// };
// console.log(getSortedUniqueSkills(products));

// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
//
