// TODO: create the function sumAll

console.log(sumAll(1, 2)); // expected output: 3
console.log(sumAll(1, 2, 3)); // expected output: 6
console.log(sumAll(1, 2, 3, 4)); // expected output: 10

function sumAll(...args) {
    let sum = 0;
    for (const arg of args) {
      sum += arg;
    }
    return sum;
  }
// function sumAll(){
//     const len = sumAll.length;
//     const sum = 0;
//     for (let i=0;i<=len;i++){
//         sum+=i;
//     }
// }
//don't change this line
  module.exports = { sumAll };
