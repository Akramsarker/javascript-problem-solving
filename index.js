// for(let i = 0; i < 10; i++){
//   console.log([i])
// }

// Find out leap Year

function isLeapYear(year) {
  const leapYear = year % 4;
  if (leapYear === 0) {
    console.log(year, "Is Leap Year");
  } else {
    console.log(year, "Is Not Leap Year");
  }
}

isLeapYear(2020);
