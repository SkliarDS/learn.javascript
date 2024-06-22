let city = 'astrahan';
let fruit = 'apple';
let user = {
    name: 'Dima',
    'last name': 'Skliar', 
    age: 44,
    [city]: 'Moscow',
    0: "Тест",
    __proto__: 10,
    [fruit + 'Computers']: 5,
};

user[0] = 1;
console.log('user:', user['last name']);
console.log('user.city:', user.astrahan);
console.log('user.0:', user[0]);
console.log('user.__proto__:', user.__proto__);
console.log('user in:', '0' in user );


for(let key in user) {
    console.log('for user:', `${key} = ${user[key]}`);
}

let admin = {};

admin.name = 'John';
admin.surname = 'Smith';
console.log('admin:',admin);
admin.name = 'Pete';
console.log('admin 2:',admin);
delete admin.name;
console.log('admin 3:',admin);
// ==========================
let schedule = {
    name: 'есть св-во',
};
const isEmpty = (obj) => {   
    for (let key in obj){
        return false;
    }
    return true;
}
console.log('isEmpty:',isEmpty(schedule));
// =======================================
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0 ;
for (let key in salaries){
    sum += salaries[key] ;
}

console.log("sum:", sum);
// ==============================================
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (obj) => {    
    for (let key in obj) {
        typeof obj[key] == "number" ?  obj[key] *= 2 : obj[key];
    }    
};

multiplyNumeric(menu)
console.log('menu2:',menu);

/* Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом */
let obj_1 = {
    a: 1,
    b: 2,
    c: 'name'
};
let arr_2 = [1, 2, 3];

const isPlainObject = (obj) => !Array.isArray(obj) ? true : false;

console.log('isPlainObject obj_1:',isPlainObject(obj_1));
console.log('isPlainObject arr_2:',isPlainObject(arr_2));

/* Напишите функцию, которая возвращает вложенный массив вида `[[key, value], [key, value]]`. */ 

const obj_2 = { a: 1, b: 2 };

const makePairs =(obj)=> {
    let arr = [];
    for (let key in obj){
        arr.push([key, obj[key]]);
    }
    return arr;
}

const makePairs_2 = (obj) => Object.keys(obj).map(item => [item , obj[item]]);

console.log('makePairs:',makePairs(obj_2));
console.log('makePairs_2:',makePairs_2(obj_2));

// Напишите функцию, которая возвращает новый объект без указанных значений. ({ a: 1, b: 2 }, 'b') => { a: 1 }
const obj_3 = { a: 1, b: 2, c: 3 };

const without = (obj, ...arg) => {
    const new_obj = {...obj};
    arg.forEach(item => delete new_obj[item])
    return new_obj;
}
console.log('without:',without(obj_3, 'b', 'c'));

const user1 = { name: "John", age: 30 };
let clone1 = {};
for (let key in user1) {
    clone1[key] = user1[key];
}
clone1.name = "pete";

console.log('clone:',clone1);

console.log('user1.name:',user1.name);

Object.assign(user1, clone1);

console.log('dest:',user1);

console.log('user2.name:',user1.name);

