function chooseBestSum(t, k, ls) {
  let sumList = [];
  for (let i = 0; i<ls.length; i++) {
    let list = ls;
    list.splice(i, 1);

    for (let j = 0; j<list.length: j++) {
      let subList = list;
      subList.splice(j, 1);
      subList.map(num => {
	sumList.push(ls[i] + list[j] + num);
      })
    }
  }
  return sumList.reduce((acc,val) => {
    if (val > acc) acc = val;
  })
}
