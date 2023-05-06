// for (let i = 0; i < 10; i++) {
//   console.log([i]);
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

// const sentences =
//   "Amar somar bangla ami tomai valovasi. chiro din tomar aksh, tomar vatach amar prane bajai bashi. amar soname bangla ami tomai valovashi.";

// // const split = sentences.split(' ')
// // const split = sentences.split(".");
// // const split = sentences.split(",");
// const split = sentences.split(" + ");

// console.log(split);

// const arr = ["John", "Jane", "John", "Mike", "Jane"];
// function removeDuplicates(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const name = arr[i];
//     if (newArray.includes(name) === false) {
//       newArray.push(name);
//     }
//   }
//   return newArray;
// }
// console.log(removeDuplicates(arr));
// const uniqueArr = [...new Set(arr)];
// console.log(uniqueArr); // Output: ["John", "Jane", "Mike"]

// Foo Bar
for (let i = 0; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("Foo Bar");
  } else {
    console.log(i);
  }
}
