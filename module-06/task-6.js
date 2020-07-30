import Default from "./products.js";

// *****************************************************
// Задание 1
// *****************************************************
//

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };
// console.log(getUserNames(Default));

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
// console.log(getUsersWithEyeColor(Default, "blue"));

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
// console.log(getUsersWithGender(Default, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//

// *****************************************************
// Задание 4
// *****************************************************
//

// const getInactiveUsers = (users) => {
//   return users.filter((user) => !user.isActive);
// };
// console.log(getInactiveUsers(Default)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
//

// *****************************************************
// Задание 5
// *****************************************************
//

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };
// console.log(getUserWithEmail(Default, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(Default, "elmahead@omatom.com")); // {объект пользователя Elma Head}
//

// *****************************************************
// Задание 6
// *****************************************************
//

// const getUsersWithAge = (users, min, max) => {
//   return users.filter((user) => user.age >= min && user.age <= max);
// };
// console.log(getUsersWithAge(Default, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(Default, 30, 40));
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
// console.log(calculateTotalBalance(Default)); // 20916
//

// *****************************************************
// Задание 8
// *****************************************************
//

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName));
// };
// console.log(getUsersWithFriend(Default, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(Default, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
//

// *****************************************************
// Задание 9
// *****************************************************
//

// const getNamesSortedByFriendsCount = (users) => {
//   return users.sort((a, b) => a.friends.length - b.friends.length);
// };
// console.log(getNamesSortedByFriendsCount(Default));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
//

// *****************************************************
// Задание 10 (Вроде как работает, но не уверен, что правильно записан код)
// *****************************************************
//

// const getSortedUniqueSkills = (users) => {
//   return users
//     .flatMap((user) => user.skills)
//     .sort()
//     .filter((skills, index, arr) => arr.indexOf(skills) === index);
// };
// console.log(getSortedUniqueSkills(Default));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
