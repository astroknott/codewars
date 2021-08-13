// https://www.codewars.com/kata/523a86aa4230ebb5420001e1

function anagrams(word, words) {
  let ltrs = word.split("");

  let data = {};
  
  let set = new Set(ltrsCopy);
  set.forEach(ltr => {
    data[ltr] = 
  });

  set.forEach((ltr,i) => {
    let setCopy = set;
    setCopy.splice(ltr, i);

    if (setCopy.size > 0) {
      setCopy.forEach(ltr) {
	return {ltr}
      }
    }
  });

  const getNode = (pathArray, data) => {
    pathArray.reduce((acc,val) => {
      return acc[val];
    }, data);
  }
}

const recurseTree = (ltrs) => ltrs.reduce((data, ltr, i, ltrArr) => {
  let copy = ltrArr;
  data[ltr] = {};
  copy.splice(ltr,1);
  if (copy.length > 0) {
    data[ltr] = recurseTree(copy);
  }
}, {})


recurseTree(ltrs);
