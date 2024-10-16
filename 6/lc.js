[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]



[1, 2, 3, 4, 5, 6, 7, 8, 9]

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
]

console.log('newArr:',arr.flat());

function factorial(x){
    if(typeof x !== 'number'){
        return;
    }
    if(x < 0){
        return null;
    }
    if(x <= 0){
        return 1;
    }
    if(x === 1){
        return x;
    } else {
        return x * factorial(x - 1) ;
    }
}
console.log('factorial(5):',factorial(5));

const usersArray = [
    { id: "34rdca3eeb7f6fgeed471198", name: "Andrew", age: 25 },
    { id: "76rdca3eeb7f6fgeed471100", name: "Alexey", age: 15 },
    { id: "12rdca3eeb7f6fgeed4711012", name: "Egor", age: 13 },
    { id: "32rdca3eeb7f6fgeed471101", name: "Kate", age: 31 },
    { id: "98rdca3eeb7f6fgeed471102", name: "Elena", age: 18 }
];
  
const usersObject = {
    "34rdca3eeb7f6fgeed471198": {
      id: "34rdca3eeb7f6fgeed471198",
      name: "Andrew",
      age: 25
    },
    "76rdca3eeb7f6fgeed471100": {
      id: "76rdca3eeb7f6fgeed471100",
      name: "Alexey",
      age: 15
    },
    "12rdca3eeb7f6fgeed4711012": {
      id: "12rdca3eeb7f6fgeed4711012",
      name: "Egor",
      age: 13
    },
    "32rdca3eeb7f6fgeed471101": {
      id: "32rdca3eeb7f6fgeed471101",
      name: "Kate",
      age: 31
    },
    "98rdca3eeb7f6fgeed471102": {
      id: "98rdca3eeb7f6fgeed471102",
      name: "Elena",
      age: 18
    }
};

function getAdultUsers(users) {
    let obj = {};
    let arr =[];
    if(Array.isArray(users)){
        for(let key of users){
            if(key.age >= 18 ){
                arr.push(key);
            }
        }
        return arr;
    } else {
        for(let key in users){
            if(users[key].age >= 18){
                obj[key] = users[key]
            }
        }
        return obj;
    }
   
}

console.log('getAdultUsers', getAdultUsers(usersObject));

// =============== 3 ЗАДАНИЕ  ===============
// Чат-бот с таймерами и обработкой запросов
// Создай чат-бота, который принимает сообщения и отвечает на них через определенное время (например, с задержкой 2 секунды). 
// У бота есть список заготовленных ответов. 
// После получения сообщения он отвечает одним из случайных ответов из списка.

// Условия:
// Бот принимает сообщение через метод sendMessage(message).
// Бот отвечает через 2 секунды случайной фразой из списка ответов.
// У бота есть массив заранее подготовленных ответов, который можно расширить через метод addResponse(response).

// Пример:
// const bot = new ChatBot();
// bot.sendMessage('Привет, бот!');  // Через 2 секунды бот ответит случайной фразой
// bot.addResponse('Рад тебя видеть!');
// bot.sendMessage('Как дела?');  //  Бот ответит одной из

function ChatBot(){
    this.title = document.querySelector('#title');
    this.input = document.querySelector('#input');
    this.btn = document.querySelector('#btn');

    let answerTexts = [
        'Рад тебя видеть!',
        'Что хочешь!',
        'Не задавай глупых вопросов!',
        'Кури бамбук!',
        'Пошел от сюда хилиган!',
    ]
    this.handle = function(e){
        this.title.textContent = e.target.value;
    }
    this.getTextInput = function(){
        this.input.addEventListener('input', (e) => this.handle(e))
    }
    this.sendAnswer = function(){
        this.btn.addEventListener('click', () => {setTimeout(()=>this.addResponse(), 1000)})
    }
    this.addResponse = function(answer){
        let random = Math.round(Math.random() * (answerTexts.length - 1));
        this.randomAnswer = answerTexts[random];
        this.title.textContent = this.randomAnswer;
    }
}
let bot = new ChatBot();

bot.getTextInput();
bot.sendAnswer();


// Дан многомерный объект произвольного уровня вложенности:

{
    a: {
        b: {
            c: '+++'
        }
    }
}

// Сделайте функцию, которая будет возвращать элементы объекта, параметром получая строку с ключами объекта, разделенными точками:
// func10('a.b.c'); // вернет '+++'

function sayHi(phrase, who) {
    console.log( phrase + ', ' + who );
  }
  
setTimeout(sayHi("Привет", "ДжонYuk"), 1000); // Привет, Джон

// setTimeout(function run() {
//     func(i);
//     setTimeout(run, 100);
// }, 100);

// setTimeout(function run() {
//     setTimeout(run, 100);
//     func(i);
// }, 100);

// performance.now()


let x = 40;
function foo() {
    const x = 10;  
    return {
        x: 20,
        bar: () => {
            console.log(this.x); // indefined
        },
        baz: function () {
            console.log(this.x); //20
        },
    };    
}

const obj1 = foo();
obj1.bar(); 
obj1.baz(); 

const obj2 = foo.call({ x: 30 });

let y = obj2.bar;
let z = obj2.baz;
y(); // 30
z(); // indefined

obj2.bar(); // 30
obj2.baz(); // 20



// реализовать свой apply
// function myApply(context, arg, func) {
    
// }

// function aboba(){
//     console.log(this.name)
// }

// aboba.myAplly()
// myAplly(..., aboba)


// function sayHi() {
//     let name = 'Dima'
//     console.log( this.name );
//     console.log('num', this.num );
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
//     name: "Вася",
//     num: 5
// });
// sayHi()
// bound()

const fetchPosts = async () => {
    const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const responseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    const posts = await responsePosts.json();
    const users = await responseUsers.json();
    const newPosts = posts.map(post => {
        const user = users.find(user => user.id == post.userId);
        const countPost = posts.filter(item => item.userId == post.userId).length;
        return {
            ...post,
            userName: user.name,
            userCount: countPost
        }
    })
    const filteredPosts = newPosts.sort((a, b) => a.title.localeCompare(b.title)).filter(post => post.title.length >= 40);
}
fetchPosts();