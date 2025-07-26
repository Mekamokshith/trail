const version=20;
function add(a,b){
    return a+b;
}
const add1=(a,b) =>a+b;
const greet=() =>console.log("hello");
const square=x => x*x;
const multiply=(a,b)=>{
    let result=a*b;
    return result;
};
greet();

console.log(add(10,20));
console.log(add1(5,3));