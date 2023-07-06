const myIncludes = (arr, search, begin) => {
  if (begin === undefined) {
    begin = 0;
  } else if (begin < 0) {
    begin = arr.length + begin;
  }
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item === search && item >= arr[begin]) {
      return true;
    }
  }
  return false;
};

let array = [1, 2, 3];

console.log(myIncludes(array, 3, -1));
