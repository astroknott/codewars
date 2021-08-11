var findMissing = function(list) {
  let maxDif = 0;
  let missingNumber;

  list.forEach((i, idx) => {
    if (idx <= list.length) {
      let dif = list[idx + 1] - i;

      if (Math.abs(dif) > Math.abs(maxDif)) {
        if (idx == 0) {
          maxDif = dif;
          missingNumber = maxDif / 2 + i;
        } else {
          maxDif = dif;
          console.log("new MaxDif", maxDif);
          missingNumber = maxDif / 2 + i;
        }
      }
    }
  })

  return missingNumber;
}
