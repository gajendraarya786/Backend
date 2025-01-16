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
}
