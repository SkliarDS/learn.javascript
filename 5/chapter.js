let arr = ["Ilya", "Kantor", "ffff", 'ddd', {age: 30}];
let [firstName, surname, , , obj] = arr;
console.log('firstName:',surname);

console.log('f:',obj);
let {height, width, title ='subMenu'} = { title: "Menu", height: 200, width: 100 };

console.log('height:',title);

let user = {
    name: "John",
    years: 30,
};

let {name, years: age, isAdmin: isAdmin = false} = user;
console.log('name:',name);
console.log('age:',age);
console.log('isAdmin:',isAdmin);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function topSalary(obj){
    let nameMax = '';
    let salarieMax = 0;
    for(let [name, val] of Object.entries(obj)){
        if(salarieMax < val){
            salarieMax = val;
            nameMax = name;
        }
    }
    return nameMax;
}
console.log('topSalary(salaries):',topSalary(salaries));

let now = new Date();
console.log('now:',now);

let date = new Date(2012, 1, 20, 3, 12, 0, 0);
let date_1 = new Date(2012, 0, 3);

console.log('date:',date);

const weekDays = [
    ['ВС', 0],
    ['ПН', 1],
    ['ВТ', 2],
    ['СР', 3],
    ['ЧТ', 4],
    ['ПТ', 5],
    ['СБ', 6],
]
function getWeekDay(d){
    let day = d.getDay();
    for(let weekDay of weekDays){
        if(day == weekDay[1]){
            return weekDay[0];
        }
    }
}
console.log('getWeekDay(date_1):', getWeekDay(date_1));

function getLocalDay(d) {
    let day = d.getDay();
    if(day == 0){
        day = 7;
    }
    return day;
}

console.log('getLocalDay(d):',getLocalDay(date_1));

function getDateAgo(date, days){
    let day = new Date(date);
    day.setDate(date.getDay() - days);
    return day.getDate();
}
console.log('getDateAgo(date, days):',getDateAgo(date_1, 2));

function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
console.log('getLastDayOfMonth(year, month):',getLastDayOfMonth(2012, 1));

function getSecondsToTomorrow(){
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return (tomorrow - now) / 1000;
}
console.log('getSecondsToTomorrow():',getSecondsToTomorrow());

let user1 = {
    name: "Василий Иванович",
    age: 35
};
let json = JSON.stringify(user1);

console.log('user1:', json);
console.log('user1:', JSON.parse(json));

let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log('json:', 
    JSON.stringify(meetup, function replacer(key, value){
        return (key != "" && value == meetup) ? undefined : value;
    })
);

function isToday(date) {
    let now = new Date();
    return now.getFullYear() == date.getFullYear() && now.getMonth() == date.getMonth() && now.getDate() == date.getDate();
}

console.log('isToday(date):',isToday( new Date()));

const cycleObj = { cycle: '!!!' };
cycleObj['cycleObj'] = cycleObj;

const obj10 = { prop1: 123, prop2: 'str', prop3: true, cycleObj };

console.log('json:', 
    JSON.stringify(obj10, function replacer(key, value){
        return (key != "" && value == cycleObj) ? undefined : value;
    })
);


// obj[Symbol.iterator] = () => {
//     // ?
// };

// const obj = { prop1: 123, prop2: 'str', prop3: true };
// const [val1, val2, , val3] = obj;
// for (val of obj) {
//     console.log(val);
// }