
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
console.log('pow(2, 3):',pow(2, 3));

function sumTo(n) {
    // let result = n;
    // for(let i = 0; i < n; i++){
    //     result += i;
    // }
    // return result;

   
    if(n <= 0){
        return n;
    } else {
        return n + sumTo(n - 1);
        // 3
        // 2
        // 1
    }
}

console.log('sumTo(n):',sumTo(4));

function factorial(n){
    if(n === 1){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log('factorial(5):',factorial(5));

function fib(n) { 
    if(n <= 1){
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log('fib:',fib(7));

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
        value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list){
    while(list){
        console.log('list.value:',list.value);   
        list = list.next;     
    }
}
printList(list)

function sumAll( ...args) { // args — имя массива
    let sum = 0;
    console.log('arguments:',arguments);
    for (let arg of args) sum += arg;
  
    return sum;
}
console.log('sumAll(...args):',sumAll(1, 2, 3, 4));

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log('Math.max(...arr1, ...arr2):',Math.max(...arr1, ...arr2));

let merged = [0, ...arr1, 2, ...arr2];
console.log('merged:',merged);

// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";
// sayHi(); 

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}
sayHi();

function sum(a){    
    return function(b){
        return a + b;
    }
}
console.log('sum:',sum(2)(4));
console.log('sum:',sum(5)(-1));

let x = 1;

function func() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    // let x = 2;
}
func();

let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b){
    
    return function(num){
        
        return num >= a && num <= b;
        
    }
   
}
console.log('arr.filter(inBetween():',arr.filter(inBetween(3, 6)));

function inArray(array){
    
    return function (num){
        for(let key of array){
            if(key == num){
                return true;
            }
        }
    }
}
console.log('arr.filter(inArray([1, 2, 10]):',arr.filter(inArray([1, 2, 10])));

let users = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" }
];

function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
console.log('byField(fieldName):',users.sort(byField('age')));

function makeArmy() {
    let shooters = [];

    for(let i = 0; i < 10; i++){
        let shooter = function(){
            console.log('i:',i);
        }
        shooters.push(shooter);
    }
    return shooters;
}

let army = makeArmy();
army[2]();


function makeCounter(){
    // let count = 0;
    function counter(){
        return ++counter.count;
    }
    counter.count = 0;
    counter.set = value => counter.count = value;
    counter.dec = () => --counter.count;
    return counter;
}

let counter = makeCounter();

console.log('counter:',counter());
console.log('counter:',counter.set(3));
console.log('counter:',counter.dec());

