const mySplit = (string, separator) => {
  let result = [];
  let joiner = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char !== separator) {
      joiner += char;
    } else if (char == separator && i + 1 < string.length) {
      result.push(joiner);
      joiner = "";
    }
  }
  result.push(joiner);

  return result;
};

console.log(mySplit("asdasd, ,as,dads", ","));
console.log("asdasd, ,as,dads".split(","));
