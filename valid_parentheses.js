/// Write a function that takes a string of parentheses, and determines
/// if the order of the parentheses is valid. The function should
/// return true if the string is valid, and false if it's invalid.


// string is valid if:
// - equal num of opening and closign parens
// - check each open paren closes
// -- traverse chars, if closing paren then good, if open paren then check if that one closes before continuing
// -- use recursion
// - (()()(

function validParentheses(parens) {
  let arr = parens.split('');

  // can't start with closing tag
  if (arr[0] !== '(') return false;

  arr.forEach((c, idx) => {
    findCloseParen(c, arr, idx);
  })

  return isValid;
}

function findCloseParen(start, arr, idx) {
  if (start !== '(') return "not an opening tag";
  let searchArr = arr;
  searchArr.splice(0, idx + 1);

  searchArr.forEach(c => {
    if (c == ")") {

    } else if (c == "(") {
      findCloseParen(c, arr);
    }
  })


  return indexOfClosingParen;
}
