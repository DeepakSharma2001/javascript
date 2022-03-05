// functionn in js withoutb oarameter and without return type
function sayhello(){
    console.log("hello from function");
}

sayhello();


//functionn with pareamneter

function sum(num1,num2){
    addition= num1+num2;
     console.log("addition of numbers:" + addition);
}

sum(5,7);

//function with return type

function multiply(num1,num2){
    return num1*num2;
}
let ans= multiply(3,5);
console.log(ans);

// we can store function in an variable
// function are first class citizens because they can store in variable.

let a = function sub(num1,num2){
    return num1-num2;
}
console.log(a(10,5));

//IIFE= immediattely invoked function expression 

(function(){
    console.log("hello from IIFE");
})();

// iife with parametr
(function(num1,num2){
    console.log(num1/num2);
})(10,5);