// empty array 
let arr = [];
console.log(arr);

//array with elements 
 let elearr = [ 1,2,3,4,'iam string',false, 4.5];
 console.log(elearr);

 console.log("element at 4 the index " + elearr[4]);
 console.log("element at 1 the index " + elearr[0]);
 

 // elements change in array
 elearr[3]='nothing';

 console.log("######################");


//  array methods
// 1. push
 
console.log("array befor push: "+elearr);
elearr.push("yeah");
console.log("array after push: "+elearr);
elearr.push("1234545");
console.log(elearr);

// 2.pop

elearr.pop();
console.log("array after pop "+ elearr);

// 3.shift 
elearr.shift();
console.log("array after shift:" +elearr);

// 4.unshift
elearr.unshift("unshift added");
console.log("array after unshift:"+ elearr);


// 5.length
let len = elearr.length;
console.log(len);