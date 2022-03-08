// // empty object
// let obj={};
// console.log(obj);

// // objects with some content
// let objdeepak = {
//     "name": 'Deepak',
//     "age": '21',
//     phoneno: '987456321',
//     lastname: 'sharma'
// };

// console.log(objdeepak);

// captianamerica objects
let capamerica= {
    Name : 'steve',
    Age: 9999,
    friends: ['natasha','thor','tony','bucci'],
    Address:{
        City: 'queens',
        state: 'haryana',
    },
    sayHI: function(){
        console.log("cap america say hello");
    }

}
//whole object 
console.log(capamerica);

// acess from an objects
//name of capamerica
console.log(capamerica.Name);// just write the key with dot notation to acess
console.log(capamerica.Address.City);
// array ke elements ko acess krne k liye 
console.log(capamerica.friends[0]);
// function k liye 
console.log(capamerica.sayHI()); // yeh undefined isloye aaya bcz no return value


capamerica.sayHI();
