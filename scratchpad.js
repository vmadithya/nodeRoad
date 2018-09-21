//ES 6 Function
// Arrow Function
var square = x => x*x;

console.log(square(9));

var user = {
    name: "Adi",
    sayHi: () => {
        console.log(`Hi this is ${this.name}`);
    },
    sayHiAlt(){
        console.log(arguments);
        console.log(`Hi this is ${this.name}`);
    }
};

user.sayHi();

user.sayHiAlt(1,2,3,4,5);