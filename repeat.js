const myRepeat = (string, count) => {
  let result = "";
  if (count < 0) {
    throw new RangeError();
  } else if (count == 0) {
    return result;
  } else {
    for (let i = 0; i < count; i++) {
      result += string;
    }
  }
  return result;
};

console.log(myRepeat("abc", 3.5));
