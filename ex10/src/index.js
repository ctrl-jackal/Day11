// Only change code below this line
function mySplice(arr1, arr2, n) {
  var newArr1 = [...arr1];
  var newArr2 = [...arr2];
  for (var i = 0, j = newArr1.length; i < newArr1.length; i++) {
    newArr1.splice(i, 0, newArr1[j - 1]);
    newArr1.splice(j, 1);
  }
  newArr2.splice(n, 0, ...newArr1);
  //   console.log(arr1, arr2);
  return newArr2;
}
// Only change code above this line
console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));

module.exports = mySplice;
