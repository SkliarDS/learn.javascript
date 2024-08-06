let arr = ['i', 'go', 'home', 'we'];
let numbers = [1, 4, 2, 10, 9];
let newArr =  arr.slice(0, 1);

console.log("newArr:", newArr)

let arrayLike = {
    0: "что-то",
    1: "ещё",
    2: "ещё",
    [Symbol.isConcatSpreadable]: true,
    length: 3,
};
arr.concat(arrayLike);
console.log('arr:',arr.sort((a, b) => a > b ? 1 : -1));
console.log('numbers:',numbers.sort((a, b) => a - b));

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 4, name: "Петя"},
];

let user = users.map((item, index, arr )=> {
    return item;
});

console.log('user:',user);

let names = 'Вася,Петя,Маша';
let str = "тест";
let arrNames = names.split(',');
console.log('str:',arrNames.join('/'));
console.log("arrNames:", arrNames)

