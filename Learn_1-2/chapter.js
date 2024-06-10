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

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?

console.log('c:',c); // 2
console.log('a:',a); // 2
console.log('b:',b); // 2
console.log('d:',d); // 1

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