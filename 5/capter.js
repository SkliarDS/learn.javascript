
console.log('Math:',Math.round(3.5));
function random(min, max){
    
    return  Math.random() * (max - min);
}
console.log('random:',random(1, 5));

function random2(min, max){
    
    return  Math.floor( Math.random() * (max - min));
}
console.log('random:',random2(1, 5));

let guestList = `Guests:
  John
 * Pete
 * Mary
`;
console.log('guestList:',guestList);

let str = 'Hello';
let strNew = new String();
console.log('str:',str.at(-3));
console.log("strNew:", typeof strNew)

for(let key of str){
    console.log('key:',key);
}

let str1 = 'Widget with id'.toLowerCase();
let str2 = 'WidgeT with id';
let substr = 'wi';
let pos = 0;
let count = 0;
for(let key of str1){
    let foundPos = str1.indexOf(substr, pos);

    if(foundPos == -1) break;
    console.log('foundPos:',foundPos);
    pos = foundPos + 1;
    ++count;
    
    
}
console.log('count:',count);
console.log('str2:', str2.includes(substr))

let str3 = '';

for (let i = 65; i <= 220; i++) {
    str3 = str3 + String.fromCodePoint(i);
}
console.log('str3:',str3);

let number = Number('1' * '5');
console.log("number:", number)

console.log('fff:', +(0.1  + 0.2).toFixed(3) === 0.3);

let newStr = 'stringify'
console.log('clice:',newStr.slice(0, 5));






const ucFirst = function(str){
    str = str.trim();
    let firstLetter = str.at(0).toUpperCase();
    let restLetter = str.slice(1);
    return `${firstLetter}${restLetter}`;
};
console.log('ucFirst():',ucFirst("  вася ") == "Вася");

const checkSpam = function(str) {
    str = str.trim().toLowerCase();
    return (str.includes('XXX'.toLowerCase())  || str.includes('ViAgRA'.toLowerCase())) ? true : false ;
}
console.log('checkSpam:',checkSpam('buy ViAgRA now'));
console.log('checkSpam2:',checkSpam('innocent rabbit'));
console.log('checkSpam3:',checkSpam('free xXxxx'));

function truncate(str, maxlength){
    str = str.trim();
    if(str.length >= maxlength){
        return str = `${str.substr(0, maxlength - 1)}...` 
    } else {
        return str;
    }
};

console.log('truncate:',truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log('truncate1:',truncate("Всем привет!", 20));

function  extractCurrencyValue(str){
    return +str.slice(1);
}
console.log('extractCurrncyValur:',extractCurrencyValue('$120') === 120 );

function DNAtoRNA(dna) {
    let newStr = '';
    for(let key of dna){        
        if(key == 'T'){
            newStr += 'U';
        } else {
            newStr += key;
        }
    }
    return newStr;
}
console.log('DNAtoRNA(dna):',DNAtoRNA('TTRT'));
console.log('DNAtoRNA(dna):',DNAtoRNA('GCAT'));
console.log('DNAtoRNA(dna):',DNAtoRNA('GACCGCCGCC'));


let styles = ["Джаз", "Блюз",];
styles.push('Рок-н-ролл');
let middle = Math.floor(styles.length / 2); 
styles[middle] = 'Классика';
let firstItem = styles.shift();
styles.unshift('Rap', 'Reggi')
console.log("firstItem:", firstItem)
console.log('styles:',styles);


let arr = ["a", "b", function(){console.log('this:',this)},];

arr.push(function() {
    console.log( this );
});

arr[2]() // ?
arr[3]() // ?

function sumInput(){
    let arr_num = [];
    let num;
    while(true){
        num = prompt('?');
        if(num == null || !Number.isNaN(num) || num == '')break;
        arr_num.push(parseInt(num));   
    }
    let sum = 0;
    for(let number of arr_num){
        sum += number;
    }
    return sum;   
}
// console.log('sumInput():',sumInput());

const readNumber = () => {
    let num;
    while(true){
        num = +prompt('?');
        if(!Number.isNaN(num))break;
    }
    if(num == null || num == ''){
        num = 'null';
    }
    return num;
};
// console.log('readNumber:',readNumber());

// const num1 = parseInt(prompt('?', ));
// const num2 = parseInt(prompt('?', ));

// if(!Number.isNaN(num1) && !Number.isNaN(num2)){
//     console.log('sum:', num1 + num2);
// } else {
//     alert('Введите число')
// }

let fruits = ["Яблоко", "Апельсин", "Груша"];
fruits[fruits.length] = 'limon';
fruits.age = '25'
fruits.age = ''
fruits.pop();
delete fruits.age;
console.log('fffff:', fruits);
for(let key of fruits){
    console.log('key:', key);
}