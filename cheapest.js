//  phone compeare kora

function cheapestphone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const mobile = [
  { name: "sumsung", price: "10000000", color: "goya" },
  { name: "sumsung", price: "200000", color: "goya" },
  { name: "sumsung", price: "30000000", color: "goya" },
  { name: "sumsung", price: "1000", color: "goya" },
  { name: "sumsung", price: "90000", color: "goya" },
];

const result = cheapestphone(mobile);
console.log("the cheapest phone is :", result);
