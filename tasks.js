'use strict'

//  1 часть
// Задачи:
//================================================================================================
// 1. При создании "Меню Путешественника" вы решили добавить в него новые блюда.
//    Добавьте несколько уникальных блюд в конец меню.

const travelerMenu = ["Pasta", "Pizza", "Salad"];
const newDishes = ["Sushi", "Burger", "Curry"];
const new_arr =  travelerMenu.concat(newDishes);



console.log('Меню Путешественника после добавления блюд:', new_arr);
//================================================================================================
// 2. В вашем городе прошло музыкальное событие, и несколько артистов решили подарить вам свои CD.
//    Удалите последний полученный CD из вашей коллекции.

const cdCollection = ["Artist1 CD", "Artist2 CD", "Artist3 CD"];
const removedCd = cdCollection.pop();


console.log('Удаленный CD:', removedCd);
console.log('Коллекция CD после удаления последнего:', cdCollection);
//================================================================================================
// 3. Вы решили поддержать идею вегетарианства и удалить из своего рациона первый завтрак.
//    Удалите первый прием пищи из вашего "Рациона Здоровья".

const healthyDiet = ["Oatmeal", "Fruit Salad", "Smoothie"];
const removedBreakfast = healthyDiet.shift();


console.log('Удаленный первый завтрак:', removedBreakfast);
console.log('Рацион Здоровья после удаления первого завтрака:', healthyDiet);
//================================================================================================
// 4. Ваш друг шеф-повар предложил вам попробовать новое блюдо, которое он только что приготовил.
//    Добавьте это блюдо в начало вашего "Особенного Меню".

const specialMenu = ["Special Soup", "Special Pasta", "Special Dessert"];
const newDish = "Special Curry";
specialMenu.unshift(newDish);


console.log('Особенное Меню после добавления нового блюда:', specialMenu);
//================================================================================================
// 5. Вы решили объединить меню вашего ресторана с меню соседнего ресторана и создать новый.
//    Объедините оба меню в одно "Эклектичное Меню".

const yourMenu = ["Appetizer", "Main Course", "Dessert"];
const neighborMenu = ["Soup", "Salad", "Side Dish"];
const eclecticMenu = yourMenu.concat(neighborMenu); 


console.log('Эклектичное Меню:', eclecticMenu);

//================================================================================================
// 7. Вы устроили вечеринку с викториной, и каждый участник получил уникальный номер.
//    Найдите номер участника с правильным ответом.

const quizParticipants = [123, 456, 789, 101, 202];
const correctAnswerParticipant = 789;
const correctAnswerIndex = quizParticipants.find(item => item == correctAnswerParticipant);


console.log('Номер участника с правильным ответом:', correctAnswerIndex);
//================================================================================================
// 8. Ваша кухня теперь ориентирована на заботу о клиенте, и вы решили предложить
//    только блюда для тех, кто следит за своим здоровьем.
//    Оставьте только те блюда, которые подходят под концепцию "Здоровой Еды".

const healthAwareMenu = ["Salad", "Grilled Chicken", "Quinoa Bowl", "Fruit Smoothie"];
const healthyOptions = healthAwareMenu.filter(item => item !== 'Grilled Chicken');


console.log('Блюда для Здоровой Еды:', healthyOptions);
//================================================================================================
// 9. Вы решили создать кулинарный блог и поделиться своими кулинарными экспериментами.
//    Удвойте количество уникальных рецептов, чтобы порадовать своих читателей.

const culinaryExperiments = ["Chocolate Cake", "Vegan Pasta", "Smoothie Bowl"];
const arr_2 =culinaryExperiments;
const doubledRecipes = culinaryExperiments.concat(arr_2);


console.log('Удвоенные рецепты для кулинарного блога:', doubledRecipes);
//================================================================================================
// 10. Ваш ресторан приобрел новый статус "Звезда Гида Мишлен", и теперь вы должны предоставить
//    ваши блюда в алфавитном порядке, чтобы поразить критиков.
//    Отсортируйте блюда в алфавитном порядке.

const michelinStarMenu = ["Dessert", "Appetizer", "Main Course", "Salad"];
michelinStarMenu.sort();


console.log('Блюда в алфавитном порядке:', michelinStarMenu);


//  2 часть
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Условие задачи:
// У вас есть массив книг, представленных в виде объектов. Каждая книга содержит информацию о названии, 
// авторе, годе публикации, жанре, количестве страниц, статусе (в наличии или в аренде) и, если книга в аренде, 
// то еще и количество экземпляров. Необходимо создать функции для решения следующих задач:

// 1. Средний возраст книг в годах. = 15517
// 2. Отфильтровать книги, выпущенные после 1900 года.
// 3. Сгруппировать книги по жанрам и внутри каждой группы отсортировать книги по названию.
// 4. Получить массив уникальных авторов.
// 5. Создать новый массив объектов с информацией о книгах: название, автор, год публикации и статус.
// 6. Посчитать общее количество страниц во всех книгах. 
// 7. Получить массив книг с количеством страниц более 300.
// 8. Изменить год публикации у всех книг, увеличив его на указанное количество лет.
// 9. Создать массив строк вида "Название книги (Автор)"
// 10. Получить среднюю длину названия книг.
// 11. Получить массив названий книг, у которых в названии есть указанное слово
// 12. Изменить жанр книги с одного на другой.
// 13. Получить массив книг с информацией о том, является ли книга "художественной" (булево свойство "художественная" или "научная").
// 14. Формирование объекта с информацией о книгах в аренде: количество книг, суммарное количество страниц и список авторов этих книг.

let books = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    genre: "фантастика",
    pages: 328,
    status: "в наличии",
  },
  {
    title: "Преступление и наказание",
    author: "Федор Достоевский",
    year: 1866,
    genre: "роман",
    pages: 574,
    status: "в аренде",
    quantity: 3,
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1966,
    genre: "фэнтези",
    pages: 480,
    status: "в наличии",
  },
  {
    title: "Мартин Иден",
    author: "Джек Лондон",
    year: 1909,
    genre: "роман",
    pages: 368,
    status: "в аренде",
    quantity: 7,
  },
  {
    title: "Солярис",
    author: "Станислав Лем",
    year: 1961,
    genre: "научная фантастика",
    pages: 224,
    status: "в наличии",
  },
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    genre: "роман",
    pages: 1225,
    status: "в наличии",
  },
  {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    genre: "фэнтези",
    pages: 432,
    status: "в аренде",
    quantity: 5,
  },
  {
    title: "Гарри Поттер и Кубок огня",
    author: "Джоан Роулинг",
    year: 2000,
    genre: "фэнтези",
    pages: 734,
    status: "в наличии",
  },
];

// 1. ==========================================
const calculateAverageAgeBooks = (obj) => {
	let avarageAgeBooks = 0;
	for (let key in obj) {
		let objects = obj[key];
		for (let age in objects){
			if(age == 'year'){
				avarageAgeBooks += objects[age];
			}
		}
	}
	return avarageAgeBooks;
};
console.log('1. Средний возраст книг в годах.:',calculateAverageAgeBooks(books));

// 2. ================================================
const year = 1900;
const booksAfterYear = books.filter(bookObjects => {
  for (let age in bookObjects){
    if(bookObjects[age] > year) return bookObjects;
  }
});
console.log('2. Отфильтровать книги, выпущенные после 1900 года.:',booksAfterYear);

// 3. ==============================================
const subStrNameGanreFantasy = 'ф';
const subStrNameGanreRomantic = 'ром';

const isGenre = (obj, subStr) => {
  return obj.filter(bookObjects => {
    let bookGenre = bookObjects.genre;   
    if(bookGenre && bookGenre.indexOf(subStr) !== -1) return bookObjects;  
  });
};

const sortBooksTitle = (arr) => {
  arr.sort((a, b) => {
    if ( a.title < b.title) {
      return -1;
    }
    if ( a.title > b.title) {
      return 1;
    }
    return 0;
  });  
  return arr;
};
const romantic = isGenre(books, subStrNameGanreRomantic);
const fantasy = isGenre(books, subStrNameGanreFantasy);
console.log("romantic:", romantic)
console.log("fantasy:", fantasy)
console.log('Сотсортировать книги по названию:',sortBooksTitle(romantic));
console.log('Сотсортировать книги по названию:',sortBooksTitle(fantasy));

// 4. ===================================================
const isUniqueAuthor = (arr) => {
  let authorArr = [];
  let authorCount = {};
  arr.map(book => authorArr.push(book.author));

  authorArr.forEach(author => {
    authorCount[author] = (authorCount[author] || 0) + 1;
  });

  return authorArr.filter(author => authorCount[author] === 1);
};  
console.log('4. Получить массив уникальных авторов:',isUniqueAuthor(books));

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;

function rearrangeArray(arr, k) {
    for(let key of arr.splice(-k, k).reverse()){
        arr.unshift(key);
    }
    return arr;
}

console.log('uniqueSort(arr):',rearrangeArray(array, k));

function sumEvenOdd(arr) {
    let obj = {};
    let obj2 = {};
    let sum = 0;
    for(let key of arr){
        if(key % 2 == 0 ){
            sum += key;
        } else {
            sum += key;
        }
    }
    obj['sum'] = sum ;
    obj2['sum'] = sum ;
}

console.log('sumEvenOdd(arr):',sumEvenOdd(array));

var originalArray = ['click1','click2',null,'','','submitForm', undefined, 0];
function squeakyClean(arr) {
    let newArr = [];
    for(let key of arr){
        if(key !== 0 && key !== null && key !== '' && key !== undefined){
            newArr.push(key);
        }
    }
    return newArr;
}
console.log('squeakyClean(arr):',squeakyClean(originalArray));

let array2 = ['5', '0', 9, 3, 2, 1, '9', 6, 7];
function divCon(x){
    let sum = 0;
    let sum2 = 0;
    for(let key of x){
        if(typeof key == 'number'){
            sum += key;
        } else {
            sum2 += +key;
        }
    }
    return sum - sum2;
}
console.log('divCon(x):',divCon(array2));


// 6) https://www.codewars.com/kata/58ad09d6154165a1c80000d1/train/javascript

// У вас есть строка, состоящая из нулей и единиц. Теперь выберите любые две соседние позиции в строке: если одна из них — 0, а другая — 1, удалите эти две цифры из строки.
// Вернуть длину результирующей (наименьшей) строки, которую можно получить после многократного применения этой операции?

// Примечание: после каждой операции оставшиеся цифры разделяются пробелами и, таким образом, больше не являются соседними — см. примеры ниже.

// Примеры
// Для "01010"результат должно быть 1:

// "01010"  -->  "  010"  -->  "    0"

// Для "110100"результат должно быть 2:
// "110100"  -->  "1  100"  -->  "1    0"

function zeroAndOne(s) {
  let newArr = [];
  for(let i = 0; i < s.split('').length; i++){
      newArr.push(s.split('').splice(i, 2));
  }  
  return newArr;
}

console.log('zeroAndOne(s):',zeroAndOne('110100'));


// 7) https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// Завершите решение так, чтобы оно разделило строку на пары из двух символов. Если строка содержит нечетное количество символов, то следует заменить отсутствующий второй символ последней пары подчеркиванием ('_').

// 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){
   
}