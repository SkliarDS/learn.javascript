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
const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8];

function uniqueNumbers(nums){
    return new Set(nums);
};
console.log('uniqueNumbers(numbers):',uniqueNumbers(numbers));