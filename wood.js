//  doro ekta khat , table , chait banate koti tuku kath lagbe etar heshab

function woodneed(chairquantity, tablequantity, bedquantity) {
  const perchairwood = 1;
  const pertablewood = 3;
  const perbedwood = 5;

  const totalchairwood = chairquantity * perchairwood;
  const totaltablewood = tablequantity * pertablewood;
  const totalbedwood = bedquantity * perbedwood;

  const totalwood = totalchairwood + totaltablewood + totalbedwood;
  return totalwood;
}

const result = woodneed(6, 2, 5);
console.log("Total wood need is :", result);
