function shadesOfGrey(n){
  let arr = [];
  for (let i = 1; i <= n && i < 255; i ++) {
    let withZero = "0" + i.toString(16);
    let val = withZero.slice(-2);
    arr[i-1] = `#${val}${val}${val}`;
  }
  return arr;
}
