// Find the maximum value two numbers

const abul = 50;
const bbul = 100;

if (abul > bbul) {
  console.log("The maximum value is: " + abul);
} else {
  console.log("The maximum value is: " + bbul);
}

// Find the maximum value of two numbers using function
function findMax(a, b) {
  if (a > b) {
    console.log("the max valu is :", a);
  } else {
    console.log("the max valu is :", b);
  }
}


findMax(10, 20);

// Find the maximum value of unlimited numbers using Math.max() function

const numbers = [10, 20, 30, 40, 50];
const maxValue = Math.max(...numbers);
console.log("The maximum value is: " + maxValue);
