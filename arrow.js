const add = (x,y=1) => x+y;
const doSum = (x,y) =>{
    const sum = x + y;
    const subtraction = x - y;
    const result = sum * subtraction;
    return result;
}
const result = add(5,6);
const result2 = doSum(7,5);

console.log(result);
console.log(result2);