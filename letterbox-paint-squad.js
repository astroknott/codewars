var paintLetterboxes = function(start, end) {
  let res = [0,0,0,0,0,0,0,0,0,0];
  for (let i = start; i <= end; i ++) {
    i.toString().split("").forEach((dig)=>{
      res[parseInt(dig)]++
    });
  }
  return res;
}
