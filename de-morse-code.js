//https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

//first attempt
decodeMorse = function(morseCode){
  let words = morseCode.split("   ").filter(n=>n);
  let ltr = words.map(word=>word.split(" ").map(ltr=>MORSE_CODE[ltr]).join("")).join(" ")
  return ltr
}
