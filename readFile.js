// For reading .txt file code block
var fs = require("fs");
var text = fs.readFileSync("D:\GitHub And Git\HashCode2019/a_example.txt").toString().split("\n");

// General Code
function getDancers(males, females) {
var names = read("D:\GitHub And Git\HashCode2019/a_example.txt").split("\n"); 
for (var i = 0; i < names.length; ++i) {
          names[i] = names[i].trim();
       }
for (var i = 0; i < names.length; ++i) { 
var dancer = names[i].split(" "); 
var sex = dancer[0];
var name = dancer[1];
if (sex == "F") {
females.enqueue(new Dancer(name, sex));
} else {
males.enqueue(new Dancer(name, sex)); }
} }