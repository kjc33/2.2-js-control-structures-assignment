// Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.

let q1test = 30;

if (q1test % 3 === 0 && q1test % 5 === 0) {
  console.log(`The number ${q1test} is divisible by three and five.`);
} else {
  console.log(`The number ${q1test} is not divisible by three or five.`);
}

//Q2. Using an if-else statement, determin if a year is a leap year or not.

let year = 1900;
// let year = 2000;
// let year = 1900;
// let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`Sweet, dude! The year ${year} is a leap year.`);
  } else {
    console.log(`The year ${year} is not a leap year.`);
}

//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 4 === 0) {
    console.log(i);
  }
}