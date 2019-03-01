const fs = require("fs");

let myLines = fs.readFileSync("a_example.txt").toString();
let myArray = myLines.split("\n");
let newArray = [];

for (var i = 0; i < myArray.length; i++) {
  var arr = myArray[i].split(" ");
  newArray.push(arr);
}

var h = [];
var v = [];

for (var i = 1; i < myArray.length; i++) {
  // var f = myArray[i].split(" ");
  var hOrV = myArray[i][0];

  if (hOrV == "H") {
    h.push(i);
  } else if (hOrV == "V") {
    v.push(i);
  }
}

for (var i = 1; i < newArray.length; i++) {
  // var f = newArray[i].split(" ");
  newArray[i] = newArray[i].sort();
}

console.log(h.length + v.length);

for (var i = 0; i < h.length; i++) {
  console.log(h[i] - 1);
}

for (var i = 0; i < v.length; i += 2) {
  console.log(v[i] - 1 + " " + (v[i + 1] - 1));
}

// var slides = [];

// for (var i = 0; i < h.length; i++) {
//   var hs1 = myArray[h[i]].split(" ");
//   for (var j = i; j < h.length; j++) {
//     var hs2 = myArray[h[j]].split(" ");
//     for (var k = 2; k < hs1.length; k++) {
//       for (var l = k; l < hs2.length; l++) {
//         if(hs1[k]==hs2[l]){

//         }
//       }
//     }4
//   }
//   slides.push(myArray[h[i]]);
// }

// for (var i = 0; i < v.length; i += 2) {
//   var v1 = myArray[v[i]].split(" ");
//   var v2 = myArray[v[i + 1]].split(" ");
// var tempStr = "";
// for (var j = 2; j < v1[1]; j++) {
//   for (var k = 2; k < v2[1]; k++) {
//     tempStr += "V " + myArray[v1[i]] + " " + myArray[v2[i]] + " ";
//     if (v1[j] != v2[k]) {
//       tempStr += v1[j];
//     } else if (v1[k] != v2[j]) {
//       tempStr += v2[j];
//     }
//   }
// }
// slides.push(tempStr);
// }

// var f = myArray[i].split(" ");
// newArray.push(f);

// console.log(slides);
