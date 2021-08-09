// https://www.codewars.com/kata/54598d1fcbae2ae05200112c/train/javascript

function all( arr, fun ){
  let a = arr.reduce((acc,val)=>{
    return fun(val) ? ++acc : acc;
  },0);
  if (a < arr.length) return false
  return true
}

// refactor
function all( arr, fun ){

}
