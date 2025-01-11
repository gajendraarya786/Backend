const sum = (a,b) => {
      return a+b;
}
const mul = (a,b) => {
    return a*b;
}
const g = 9.8;
const PI =3.4;

let obj = {
    sum:sum,
    mul:mul,
    g: g,
    PI: PI,
};

module.exports = obj;