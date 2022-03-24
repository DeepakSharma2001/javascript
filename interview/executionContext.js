//how javascript works? It works on gec(global execution context and call stack manages these execution context)
// In JS firstly memory allocated and thn works 

console.log(a);
var a = 10;
console.log(a);
function fun(){
    var b=20;
    return b;
}
console.log(c);
var c = 20;


// console.log(c);
var d = fun();
console.log(d);


//if function is declared before making then it is undefined and gives error.

fun(); 

var fun = function fun(){
    console.log("hello");
}
fun();