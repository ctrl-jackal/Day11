// Only change code below this line
function splitArrayInGroups(arr, n) {
  var result = [];
  // sve sto remove-am da pusham u result :D
  for (var i = 0; i < arr.length; i = i++) {
    var removed = arr.splice(i, n);
    result.push(removed);
    // console.log(removed);
  }
  result.splice(n);

  return result;
}
// Only change code above this line
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));

module.exports = splitArrayInGroups;
