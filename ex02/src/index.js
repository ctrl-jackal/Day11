// Create an array here
var temps = [
  [31, 31, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61],
];
// End of creating an array

function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  // Only change code below this line
  for (var i = 0; i < newTemps.length; i++) {
    var totalDay = 0;
    for (var n = 0; n < newTemps[i].length; n++) {
      totalDay += newTemps[i][n];
    }
    var avgDay = totalDay / newTemps[i].length;
    averageDayTemp.push(avgDay);
  }

  return averageDayTemp;
  // Only change code above this line
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
