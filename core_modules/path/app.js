var path = require('path');

var websiteHome = "Desktop/Bucky//website/index.html";
var websiteAbout = "Desktop/Bucky/website/about.html";

console.log("websiteHome = " + path.normalize(websiteHome));
console.log("websiteAbout = " + path.normalize(websiteAbout));

console.log("about basename = " + path.basename(websiteAbout));
console.log("about dirname = " + path.dirname(websiteAbout));
console.log("about extname = " + path.extname(websiteAbout));
console.log("home dirname = " + path.dirname(websiteHome));

console.log("current dir name : " + __dirname);
console.log("current filename : " + __filename);