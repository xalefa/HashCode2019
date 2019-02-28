const fs = require("fs");

let myLines = fs.readFileSync("a_example.txt").toString();
let myArray = myLines.split("\n");
let newArray = [];

var h = [];
var v = [];

for (var i = 1; i < myArray.length; i++) {
  var f = myArray[i].split(" ");
  var hOrV = f[0];

  if (hOrV == "H") {
    h.push(i);
  } else {
    v.push(i);
  }
}

var slides = [];

for (var i = 0; i < h.length; i++) {
  console.log(v[i]);
}

// var f = myArray[i].split(" ");
// newArray.push(f);

// console.log(newArray[0][0]);
