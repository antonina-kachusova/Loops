// While loop
// Write a script that will print to the console all numbers in multiples of 3 in the range from 33 to 23 inclusive
// (exactly in the order from 33 to 23)

let n = 33;

while (n >= 23) {
  if (n % 3 === 0) {
    console.log(n);
  }
  n--;
}

// Do/While loop
// Create a program that generates and prints random numbers from 1 to 10 to the console,
// until the number 8 is generated. The program should also count the number of iterations of the loop,
// required to generate the number 8, and print this number at the end of the loop.

let count = 0;
let randomNumber = Math.floor(Math.random() * 10) + 1;

do {
  console.log("number " + randomNumber);
  count++;
} while (randomNumber !== 8 && count < 10);

console.log(
  `The number ${randomNumber} was generated after ${count} iterations.`
);

// For loop
// Write a code that uses a for loop to raise the number 2 to a power between 2 and 10 inclusive.
// The result of each exponentiation operation should
// be printed to the console in the format "2 to the power of N is equal to R", where N is the current power,
// and R is the result of the exponentiation.

for (let i = 2; i < 11; i++) {
  let value = 2 ** i;
  console.log(`2 to the power of ${i} is equal ${value}`);
}
