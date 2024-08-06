function differenceInAges(ages){
    let max = -Infinity;
    let min = ages[0];
    for(let i = 0; i < ages.length; i++){
		if(ages[i] > max){
			max = ages[i];
		} 
		if(ages[i] < min){
			min = ages[i];
		}
    }    
    return [max, max - min, min]
}

console.log('differenceInAges(ages):', differenceInAges([82, 15, 6, 38, 35]));

function camelize(str) {
	let arr = str.split('-');
	let newArr = arr.map((item, index )=> {
		let newStr = '';
		if(index !== 0){
			newStr = `${item[0].toUpperCase()}${item.slice(1)}`;
		} else {
			newStr = item;
		}
		return newStr;
	})
	str = newArr.join('');
	return str;
};
console.log('camelize(str):', camelize("background-color"));
console.log('camelize(str):', camelize("-webkit-transition"));

function filterRange(arr, a, b) {
	let newArr = arr.filter(item => {
		if(a <= item && item <= b ){
			return item;
		}
	});
	return newArr;
}
console.log('filterRange():',filterRange([5, 3, 8, 1, 2, 4], 1, 5));

function filterRangeInPlace(arr, a, b) {
	arr.forEach((item, index) => {	
		if(item < a || item > b) {
			arr.splice(index , 1);
			index--;
		};
	})
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4)
console.log('filterRangeInPlace():',arr);


let arr2 = [5, 2, 1, -10, 8]
arr2.sort((a, b) => b - a)

console.log('arr2:',arr2);

let arrStr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
	let arrNew = [];
	for(let key of arr){
		arrNew.push(key);
	}
	return arrNew.sort();
}

let sorted = copySorted(arrStr);
console.log('sorted:',sorted);
console.log('arrStr:',arrStr);


function Calculator(){
	
	this.method = {
		'+': (a, b) => a + b,
		'-': (a, b) => a - b,
	}
	this.calculate = function(str){
	 	let arr = str.split(' ');
		let a = +arr[0];
		let operator = arr[1];
		let b = +arr[2];

		return this.method[operator](a, b);
	}
	this.addMethod = function(name, func){
		this.method[name] = func;		
	}
}

let calc = new Calculator;
console.log("calc:", calc.calculate('2 + 5'))
console.log("calc:", calc.calculate('2 - 5'))

let powerCalc = new Calculator;
powerCalc.addMethod("**", (a, b) => a ** b)
let result = powerCalc.calculate('2 ** 5');
console.log("result:", result)


let vasya = { name: "Вася", surname: "Пупкин", id: 1, age: 20};
let petya = { name: "Петя", surname: "Иванов", id: 2, age: 40};
let masha = { name: "Маша", surname: "Петрова", id: 3, age: 30};

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name)

console.log('names:',names);

let usersMapped = users.map(item => {
	return {
		fullName: `${item.name} ${item.surname}`,
		id: item.id
	}
});
console.log('usersMapped:',usersMapped);

function sortByAge(arr){
	arr.sort((a, b) => a.age - b.age);
	return arr;
};
console.log('sortByAge(arr):',sortByAge(users));

let arrNumbers = [0, 4, 3, 7, 2];
function shuffle(array){
	let a = array.shift();
	array.push(a);
	return array;
}
console.log('shuffle(array):',shuffle(arrNumbers));
console.log('shuffle(array):',shuffle(arrNumbers));

function getAverageAge(users){
	users.reduce((acc, item) => {
		return sum = acc + item.age;
	}, 0)
	return Math.floor(sum / (users.length));
}
console.log('getAverageAge(users):',getAverageAge(users));

let arrUsers = [
	{id: 'john', name: "John Smith", age: 20},
	{id: 'ann', name: "Ann Smith", age: 24},
	{id: 'pete', name: "Pete Peterson", age: 31},
];
function groupById(users){
	// let newArr = {};
	// for(let obj of users){
	// 	newArr[obj.id] = obj;	
	// }
	// return newArr;
	return users.reduce((obj, item) => {
		obj[item.id] = item;
		return obj;
	}, {});
};
let usersById = groupById(arrUsers);
console.log('usersById:',usersById);

function unique(arr) {
	let newArr = [];
	for(let key of arr){
		if(!newArr.includes(key)){
			newArr.push(key);
		}
	}
	return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];
console.log('unique(arr):',unique(strings));

let range = {
	from: 1,
	to: 5
  };
  let arr4 = Array.from(range);
  console.log('arr4:',arr4);
// =======================================================================
// 1
// ==========================================================================
// Нужно написать функцию, принимающую строку в качестве аргумента
// и возвращающую количество гласных, которые содержатся в строке.
//     Гласными являются «a», «e», «i», «o», «u».
function findVowels(str) {
	const vowels = 'aeiou';
	let counVowels = 0;
	for(let i = 0; i < str.length; i++){        
		if(vowels.includes(str[i])){    
			counVowels++;
		};        
	};
	return counVowels
}  


console.log(findVowels('hello')) // --> 2
console.log(findVowels('why'))// --> 0
console.log(findVowels('carwash'))// --> 2
console.log(findVowels('generator'))// --> 4
// =======================================================================
// 2
// ==========================================================================
// Требуется написать функцию, выводящую в консоль числа от 1 до n,
// где n — это целое число, которая функция принимает в качестве
// параметра, с такими условиями:
//
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// fizzBuzz(5)

// Результат
// 1
// 2
// fizz
// 4
// buzz

function fizzBuzz(n) {

}

console.log(fizzBuzz(5))
// =======================================================================
//3
// ==========================================================================
// Напишите функцию, которая поверхностно находит пересечения объектов
// и возвращает объект пересечений.
// * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }

const intersection = (firstObj, secondObj) => {
  let obj = {};
  for(let key in firstObj){
	if(key in secondObj && firstObj[key] == secondObj[key]){
		obj[key] = firstObj[key];
	}
  }
  return obj;
}

const data = {a: 1, b: 2, c: 1};
const data2 = {c: 1, b: 2, g: 3};
console.log(intersection(data, data2)); // { b: 2 }
// =======================================================================
//4
// ==========================================================================
// Создайте функцию, которая принимает массив объектов с полями name и age и
// возвращает массив имен людей, возраст которых больше 25 лет.
function getNamesOfPeopleOlderThan25(people) {
  //code here ...

}

let people = [
  {name: "John", age: 30},
  {name: "Bob", age: 25},
  {name: "Alice", age: 28},
  {name: "Anna", age: 24},
  {name: "Pit", age: 18}
];
console.log(getNamesOfPeopleOlderThan25(people));
// =======================================================================
//5
// ==========================================================================
// Напишите функцию, которая принимает последовательность имен оленей и возвращает
// последовательность имен оленей, отсортированных по их фамилиям.
// input:
//     [
//       "Dasher Tonoyan",
//       "Dancer Moore",
//       "Prancer Chua",
//       "Vixen Hall",
//       "Comet Karavani",
//       "Cupid Foroutan",
//       "Donder Jonker",
//       "Blitzen Claus"
//     ]
// output:
//     [
//       "Prancer Chua",
//       "Blitzen Claus",
//       "Cupid Foroutan",
//       "Vixen Hall",
//       "Donder Jonker",
//       "Comet Karavani",
//       "Dancer Moore",
//       "Dasher Tonoyan",
//     ]
function sortReindeer(reindeerNames) {
  //code here ...

}

const deers = [
  "Dasher Tonoyan",
  "Dancer Moore",
  "Prancer Chua",
  "Vixen Hall",
  "Comet Karavani",
  "Cupid Foroutan",
  "Donder Jonker",
  "Blitzen Claus"
]

console.log(sortReindeer(deers))
// =======================================================================
//6
// ==========================================================================
// Даны два целочисленных массива, где второй массив представляет собой
// перетасованную копию первого массива с одним недостающим элементом.
//     Найдите недостающий элемент.
function findMissing(arr1, arr2) {
  //code here ...

}


console.log(findMissing([1, 2, 3], [1, 3])) // 2
console.log(findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2])) // 8
console.log(findMissing([7], [])) // 7
console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4])) // 3
console.log(findMissing([0, 0, 0, 0, 0], [0, 0, 0, 0]))// 0
