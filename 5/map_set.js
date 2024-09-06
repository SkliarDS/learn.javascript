function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna", {1: 1}, {1: 1}, [2, 2],
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log('unique:', unique(values));

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aklean(array){
    let map = new Map();
    let arr = [];
    array.map(item => {
     
        let sorted = item.toLowerCase().split('').sort().join('');
        
        map.set(sorted, item);
        
    });
    
    for(let key of map.values()){
       arr.push(key);
    }
    return arr;
}

console.log('aklean(arr):',aklean(arr));

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
keys.push('more')
console.log("keys:", keys);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function sumSalaries(obj){  
    let sum = 0;
    for (let num of Object.values(obj)){
        sum = sum + num;
    }
    return sum;
}
function count(obj) {
    // let count = 0;
    // for(let key of Object.keys(obj)){
    //     ++count; 
    // }
    // return count;
    return Object.keys(obj).length;
}

console.log('sumSalaries(salaries):',sumSalaries(salaries));
console.log('count(salaries):',count(salaries));


/*
Напишите функцию, которая принимает название месяца и возвращает количество дней в этом месяце.
*/ 
const monthDays = new Map([
    ['January', 31],
    ['February', 28],
    ['March', 31],
    ['April', 30],
    ['May', 31],
    ['June', 30],
    ['July', 31],
    ['August', 31],
    ['September', 30],
    ['October', 31],
    ['November', 30],
    ['December', 31]
]);

function getDaysInMonth(month){
    let arr = [];
    for(let key of month.keys()){
        if(month.has(key)){
            arr.push(month.get(key));
        }
    }
    return arr;
}
console.log('getDaysInMonth(month):', getDaysInMonth(monthDays));
/* 
Напишите функцию, которая вернет новый массив, содержащий только уникальные числа из исходного массива.
*/ 
const numbers = [3, 1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8];

function uniqueNumbers(nums){
    return Array.from(new Set(nums));
};
console.log('uniqueNumbers(numbers):',uniqueNumbers(numbers));

/* 
Напишите функцию, которая принимает объект и возвращает его вес. 
Если объект не найден, функция должна возвращать undefined.
*/

let person1 = { name: 'Alice' };
let person2 = { name: 'Bob' };
let person3 = { name: 'Charlie' };

const weights = new WeakMap([
    [person1, 60],
    [person2, 75],
    [person3, 85]
]);
person1 = null;
function sizePerson(person){
   return weights.get(person);
   
}
console.log('sizePerson:',sizePerson(person1));

/* Напишите функцию, которая добавляет объекты в WeakSet, если у них есть свойство active со значением true.*/ 
let obj1 = { id: 1, active: true };
let obj2 = { id: 2, active: false };
let obj3 = { id: 3, active: true };
let obj4 = { id: 4 };

const activeObjects = new WeakSet();

function addIfActive(obj){
    for(let key of Object.values(obj)){
        if(key == true){
            return activeObjects.add(obj)  
        }
    }
}
console.log(' addIfActive(obj):', addIfActive(obj1), addIfActive(obj2));