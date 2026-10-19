//  max hight ber kora

function maxtall(numbers) {
  max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const pulapan = [56, 50, 70, 80, 20, 90, 30, 40, 50];
const result = maxtall(pulapan);
console.log("sob theke lomba mal :", result);
