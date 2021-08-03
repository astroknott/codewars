// https://www.codewars.com/kata/597d75744f4190857a00008d/solutions/javascript

// My Original Solution
var paintLetterboxes = function(start, end) {
  let res = [0,0,0,0,0,0,0,0,0,0];
  for (let i = start; i <= end; i ++) {
    i.toString().split("").forEach((dig)=>{
      res[parseInt(dig)]++
    });
  }
  return res;
}

// refactor
var paintLetterboxes = function(start, end) {
  let res = new Array.fill(0);
  for (let i = start; i <= end; i ++) {
    i.toString().split("").forEach( (dig) => res[parseInt(dig)]++ );
  }
  return res;
}
