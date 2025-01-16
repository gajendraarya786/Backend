const stu1 = {
    name: "adam",
    age: 25,
    marks: 98,
    getMarks: function () {
        return this.marks;
    }
};

const stu2 = {
    name: "peter",
    age: 21,
    marks: 78,
};

const stu3 = {
    name: "krish",
    age: 35,
    marks: 91,
}; 

let arr = [1,2,3];
arr.sayHello = () => {
    console.log("Hello, I am arr");
};

// Factory functions
// it makes the copy of the individual function and object therefore it is not efficient
function PersonMaker (name, age) {
    const person = {
        name: `${name}`,
        age: `${age}`,
        talk() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
        },
    };
    return person;
}
            
let p1 = PersonMaker("Gajendra", 20);
let p2 = PersonMaker("Krrishika", 18);

// Constructor functions
// An alternative to factory functions 
function Person(name, age){
    this.name = `${name}`;
    this.age = `${age}`;
}
let p3 = new Person("GAJENDRA", 21);