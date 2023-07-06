const mySlice = (arr, begin, end) => {
  if (end === undefined) {
    end = arr.length;
  } else if (end < 0) {
    end = arr.length + end;
  }
  let result = [];
  for (i = 0; i < arr.length; i++) {
    item = arr[i];
    if (i >= begin && i < end) {
      result.push(item);
    }
  }
  return result;
};

let array = ["ant", "bison", "camel", "duck", "elephant"];
console.log(mySlice(array, 2, -1));
console.log(array.slice(2, -1));
