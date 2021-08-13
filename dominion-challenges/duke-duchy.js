// calculates which to buy based on number you currently own of duke/duchy
const whatToBuy = (duke,duchy) => {
  const dukeVal = duchy;
  const duchyVal = duke + 3;

  return dukeVal > duchyVal ? "duke" : "duchy";
}

// given n turns, starting at 0 of each duke/duchy, simulate which should be bought each turn
let whatToBuyTime = (n) => {
  let duke = 0;
  let duchy = 0;
  for (i=0;i<n;i++) {
    let next = whatToBuy(duke,duchy);
    console.log(`Turn ${i}:`)
    console.log("duchy:", duchy);
    console.log("duke:", duke);
    console.log(`%cBuy a ${next}`, "color:blue");
    next === "duke" ? duke++ : duchy++;
  }	
}

// given number of gardens and total deck size, calculate points from gardens alone
const gardenCalculator = (gardens, deckSize) {
  return Math.floor(deckSize / 10) * gardens;
}

