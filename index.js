// for(let i = 0; i < 10; i++){
//   console.log([i])
// }

// Find out leap Year

// function isLeapYear(year) {
//   const leapYear = year % 4;
//   if (leapYear === 0) {
//     console.log(year, "Is Leap Year");
//   } else {
//     console.log(year, "Is Not Leap Year");
//   }
// }

// isLeapYear(2020);

// Use to Array methods name split

const sentences =
  "Amar somar bangla ami tomai valovasi. chiro din tomar aksh, tomar vatach amar prane bajai bashi. amar soname bangla ami tomai valovashi.";

// const split = sentences.split(' ')
// const split = sentences.split(".");
// const split = sentences.split(",");
const split = sentences.split(" + ");

console.log(split);
