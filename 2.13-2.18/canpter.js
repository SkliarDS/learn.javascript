"use strict";
let i1 = 3;
while (i1) { 
    console.log('i:',i1);
    i1--;
}
let a1 = 3;
while(a1) {
    a1--;
    console.log('a1:',a1);
}

let a2 = 0;
do{
    console.log('a2:',a2);
    a2++;
} while( a2 < 3);

let a3 = 0;
for(; a3 < 3;){
    console.log('a3:',a3);
    a3++;
    if(a3 == 2) break;
}
console.log('break:',);
let i3 = 3;

while (i3) {
    console.log( i3-- );
    // i3-- 
}
// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Значение на координатах (${i},${j})`, '');
  
//       // если пустая строка или Отмена, то выйти из обоих циклов
//       if (!input) break outer; // (*)
  
//       // сделать что-нибудь со значениями...
//     }
// };  
// alert('Готово!');

for(let i = 2; i <= 10; i +=2 ){
    console.log('i:',i);
}

let num ;
do{
    // num = prompt('Введите число больше 100');
    console.log('num:',num);
} while( num <= 100 && num );

let n = 10;
label:
for(let i = 2; i <= n; i++){
    for(let j = 2; j < i; j++){
        if(i % j == 0) continue label;
    }
    console.log('i-----:',i); 
}

let b1 = 5;
for(let i = 1; i < b1; i++){
    console.log('i11:',i);
    for(let k = 0; k < i; k++){
        console.log('k:',k);
    }
}

const x = 10;

switch (x) {
    case ( 4) :
        console.log('4:',4);
        break;
    case (10) : 
        console.log('10', 10);
        break;
    case (8) : 
        console.log('10', 10);
        break;
    default:
        console.log( "Нет таких значений" );
}

// Напишите "if", аналогичный "switch"
let brow = 'Edge';
// switch (browser) {
//     case 'Edge':
//       console.log( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       console.log( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       console.log( 'We hope that this page looks ok!' );
// }

if(brow == 'Edge'){
    console.log( "You've got the Edge!" );
} else if(brow == 'Chrome' || brow == 'Firefox' || brow == 'Safari' || brow == 'Opera'){
    console.log( 'Okay we support these brows too' );
} else if(!brow){
    console.log('brow:',brow);
    console.log( 'We hope that this page looks ok!' );
}

// Перепишите код с использованием одной конструкции switch:
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   console.log('Вы ввели число 0');
// }

// if (number === 1) {
//   console.log('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   console.log('Вы ввели число 2, а может и 3');
// }

// switch (number) {
//     case 0: 
//         console.log('Вы ввели число 0');
//         break;
//     case 1: 
//         console.log('Вы ввели число 1');1
//         break;
//     case 2:
//     case 3: 
//         console.log('Вы ввели число 2, а может и 3');
//         break;
//     default: 
//         console.log('????');
// }

const userName = 'Вася';

function showMessage() {
    const userName = "Петя"; 

  let message = 'Привет, ' + userName;
  console.log('1', message);
}

console.log('2', userName );

showMessage();

console.log('3', userName ); 

function sum(a, b='5'){
    return a + b;
}

let result = sum(2);
console.log('result :',result);

function checkAge(age){
    return age > 18 || confirm('tttrata');
}

function checkAge(age){
    return age > 18 ? true : confirm('tttrata');
}

function min(a, b){
    return a > b ? b : a;
}
console.log('min:',min(2, 5));
console.log('min:',min(3, -1));
console.log('min:',min(1, 1));

function pow(x, n){
    return x ** n;
}
// let x1 = +prompt('x')
// let n1 = +prompt('n')

function checkPow(x, n){
    return n % 1 == 0 ? pow(x, n) : console.log('error:',);
}

// console.log('checkPow:',checkPow(x1, n1));

function sayHi(hi='hello'){
    console.log(':',hi);
}

const func = sayHi;

func();


let age = 18;
let welcome ;
// в зависимости от условия объявляем функцию
if (age < 18) {

    welcome = function welcome() {
        console.log("Привет!");
    }

} else {

    welcome = function welcome() {
        console.log("Здравствуйте!");
    }

}

// ...не работает
welcome();

// let ask = (question, yes, no) => {
//     confirm(question) ? yes() : no();
// }
// ask(
//     'Вы согласны?',
//     ()=>alert("Вы согласились."),
//     ()=>alert("Вы отменили выполнение."),
// )



