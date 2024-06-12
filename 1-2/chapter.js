// 'use strict'
// alert('I love JavaScript');

// alert('Hello');

// [1, 2].forEach(alert);

let admin ;

let name_admin = 'Jon';



admin = name_admin;
num = 5; 
console.log("num:", num)

console.log('admin:',admin);
console.log('name:',name_admin);

console.log(':',`${1 + 2}`);
console.log(':',`${name_admin}`);

console.log('typeof:',typeof (null));
console.log('typeof:',typeof 1);


// let promt_name = prompt('Сколько тебе лет');
// document.querySelector('#title').textContent = promt_name;

// console.log('age:',age);
// let isBoss = confirm("Ты здесь главный?");
// console.log(' isBoss :', isBoss );

let value = true;
value = String(value); 
console.log(typeof value); 
console.log( "6" / "2" ); // 3, строки преобразуются в числа
console.log(':',Number(null));
console.log('undefined:',Number(undefined));

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// console.log('c:',c); // 2
// console.log('a:',a); // 2
// console.log('b:',b); // 2
// console.log('d:',d); // 1

console.log('null:',null >= 0);
const NAME_JS = 'ECMAScript';
// let name_from_promt = prompt('Какое назание JS ?');

// if(NAME_JS == name_from_promt){
//     console.log(':',"Верно");
// } else {
//     console.log(':',"Не знаете");
// }

// let value_promt = prompt('Введите число');
// if(value_promt > 0) {
//     console.log(':',1);
// } else if(value_promt < 0){
//     console.log(':',-1);
// } else if (value_promt == 0){
//     console.log(':',0);
// }

let login = '';
let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравтствуйте':
(login == '') ? 'Нет логина' :
'';
console.log('message:',message);

let value1 = NaN;

value1 &&= 10; // NaN
value1 ||= 20;// 20
value1 &&= 30; // 30
value1 ||= 40; // 30

console.log('f:',value1);
console.log('val:',true || false );
console.log('val:',0 || 3);
console.log('val:',"hello" || "");
console.log('val:', null && 5 || 10);

let age = 98;
if(age >= 14 && age <= 90){
    console.log('age1:',age);
}
if(age < 14 || age > 90){
    console.log('age2:',age);
}
if(!(age >= 14 && age <= 90)){
    console.log('age3:',age);
}

// let val_promt = prompt('Кто там ?');
// let pass;

// if(val_promt == 'Админ'){
//     pass = prompt('Password ?');    
// } else if(val_promt == null || val_promt == ''){
//     alert('Отмена');
// } else {
//     alert('Я вас не знаю');
// }

// if(pass == 'Я главный'){
//     alert('Здравствуйте');
// } else if(pass == '' || pass !== 'Я главный' && pass !== undefined){
//     alert('Неверный пароль:');
// }
// let city = null;

// city ??= "Берлин"; // барлин
// city ??= null; // null
// city ??= "Кёльн"; // keln
// city ??= "Гамбург"; // keln

// console.log(city);

let num1 = 10,
    num2 = 20,
    result;

if (!result) {
    result = num1 ?? num2;
    console.log('res:',result);
} else {
    console.log('res-2:',result);
}

result ??= num1 ?? num2;
console.log('res3:',result);

console.log(':',10 / 'kdfl');

let x = 5;
let y = 10;
// console.log(x > 3 && y < 15);

function logicalAnd(x, y, z) {
    return x && y && z;
}
// console.log(logicalAnd(true, false, true));

let a = true;
let b = false;
let c = a || b && !a;
// console.log(c);

function logicalNot(x, y) {
    return !x && !y;
}
// console.log(logicalNot(true, false));

let x1 = false;
let y1 = !x;
let z = y1 && x1 || !y1;
// console.log(z);

function exclusiveOr(x, y) {
    return (x || y) && !(x && y);
}
// console.log(exclusiveOr(true, false));

let a2 = 0;
let b2 = 20;
// console.log(a2 ?? b2);

function getArrayLength(arr) {
    return arr?.length ?? 0;
}
// console.log(getArrayLength([1, 2, 3]));

let x3 = null;
x3 ??= 50;
// console.log(x3);

function setDefault(obj, key, defaultValue) {
    obj[key] ??= defaultValue;
    return obj[key];
}
let obj = { a: null };
// console.log(setDefault(obj, 'a', 100));

let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );