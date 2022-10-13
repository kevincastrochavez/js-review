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

const friends = new Array('Cuauh', 'Isaac');
console.log(friends);
friends.push('Tona');
console.log(friends);
friends.unshift('Elena');
console.log(friends);
friends.pop();
console.log(friends);
friends.shift();
console.log(friends);
console.log(friends.indexOf('Cuauh'));
console.log(friends.includes('Isaac'));
