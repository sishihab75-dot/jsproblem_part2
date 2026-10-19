//  finde minimum number

function getmin(number) {
  let min = number[0];
  for (const num of number) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const mobileprice = [1000, 12000, 5000, 60000, 520];
const result = getmin(mobileprice);
console.log("The cheapest phone is :", result);
