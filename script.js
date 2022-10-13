// // Type conversion
// const year = '2022';
// console.log(typeof year);

// const newYear = Number(year);
// console.log(typeof newYear);

// // Type coercion
// console.log("I'm " + 25 + ' years old');

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean('Kevin'));

// const day = 'friday';

// switch (day) {
//   case 'wednesday':
//     console.log('Today');
//     break;
//   case 'tuesday':
//     console.log('Another Day');
//     break;
//   default:
//     console.log('Vacation');
// }

// const myAge = 26;
// const result = myAge > 25 ? 'Yes' : 'No';
// console.log(`Can you rent a car?: ${result}`);

// Function declaration
// function getMyAge(birthYear) {
//   return 2022 - birthYear;
// }

// // Anonymus function or function expression
// const getMyAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// // Arrow function
// const getMyAge3 = (birthYear) => {
//   return 2022 - birthYear;
// };

// Array methods

// const friends = new Array('Cuauh', 'Isaac');
// console.log(friends);
// friends.push('Tona');
// console.log(friends);
// friends.unshift('Elena');
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.shift();
// console.log(friends);
// console.log(friends.indexOf('Cuauh'));
// console.log(friends.includes('Isaac'));

// // OBJECTS

// const user = {
//   name: 'Kevin',
//   lastName: 'Castro',
//   birthYear: 1997,

//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(user);
// user.isMarried = false;
// console.log(user);

// console.log(user.calcAge());
// console.log(user.age);

// DESTRUCTURING ARRAYS

// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);

// // DESTRUCTURING OBJECTS
// const users = {
//   first: 'Kevin',
//   second: 'Citlalli',
//   third: 'Cindy',
// };

// const { first, second, third } = users;
// console.log(first);
// console.log(second);
// console.log(third);

// // SPREAD OPERATOR
// const nums = [1, 2, 3];
// const moreNums = [...nums, 4, 5];
// // console.log(moreNums);

// // REST PATTERN
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];

// console.log(a);
// console.log(b);
// console.log(others);

// const nums = [1, 2, 3];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const num of nums) {
//   console.log(num);
// }

// for (let i = 0; i <= nums.length; i++) {
//   //   console.log(`${nums[i]}: ${nums[i] % 3}`);
//   if (nums[i] % 3 === 0) {
//     console.log(nums[i]);
//   }
// }

// // FINDS THE FIRST ITEM THAT MATCHES THE CONDITION
// const filterNums = nums.find((num) => num % 3 === 0);
// console.log(filterNums);

// // FINDS THE FIRST ITEM THAT MATCHES THE CONDITION
// const filterNums = nums.filter((num) => num % 3 === 0);
// console.log(filterNums);

const totalSum = nums.reduce((acc, curr) => acc + curr);
console.log(totalSum);
