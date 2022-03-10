let cp = require('child_process'); // yeh btara hai hm childprocess use krre hai
// console.log(cp);

//open calculator with help of this file 


// open calculator
// cp.execFileSync("calc"); // for linux gnome-calculator

// // open vs code 
// cp.execSync("code");

let content = cp.execSync("node test.js"); // execute different files 

console.log("output of test.js "+ content);






