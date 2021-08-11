function incrementString(strng) {
  let str = strng;
  let incrementedString;

  function replacerFunction(match) {
    // convert to int and increment
    let replacedVal = match.replace(/^[0]/, (match) => {
      return parseInt(match) + 1;
    })

    console.log(match);
    console.log(replacedVal);
    return replacedVal;
  }

  str.replace(/\d+/, replacerFunction)

  return incrementedString
}
