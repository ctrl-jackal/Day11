// Only change code below this line
function myMutation(arr) {
  var arr1 = arr[0].toLowerCase();
  var arr2 = arr[1].toLowerCase();
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) < 0) {
      return false;
    }
  }
  return true;
}
// Only change code above this line
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["addfagdsvfady", "adg"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["Tiger", "zebra"]));
console.log(myMutation(["Tiger", "tiger"]));
console.log(myMutation(["Noel", "Ole"]));

module.exports = myMutation;
