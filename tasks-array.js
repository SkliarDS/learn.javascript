

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
  //code here ...

}

const data = {a: 1, b: 2};
const data2 = {c: 1, b: 2};
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