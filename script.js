const math = require('./math');
const info = require("./Fruits");

console.log(info);
console.log(math);
let n = 5;
for (let i = 0; i<n; i++){
    console.log("Hello", i);
}

// console.log(process.argv);

let args = process.argv;

for(let i = 2; i<args.length; i++){
    console.log("hello to", args[i]);
}
console.log(math.sum(2,2));
 

