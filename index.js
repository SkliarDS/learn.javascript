const symb = 'and';
const str = 'my and andcomplex str with some symbols and letters'; // вхождение подстроки 'and' будет на позициях 3, 7, 40

// 1 -- посимвольный поиск в строке на равенство с искомым символом
// 2 -- найти подстроку and

let isSymbInStr = false; // мы пессимисты
let counSymbInStr = 0;
let countSubstrSymbInStr = 0;
let posSubstr = 0;
for (let i = 0; i <= str.length; i++) {
    const current = str[i];
    let foundPos = str.indexOf(symb, posSubstr);

    if (current == symb) {
        isSymbInStr = true;
        counSymbInStr = counSymbInStr + 1;       
    }
    
    if (foundPos == -1) break; // пока не понял почему break полностью не прекращает цикл
  
    countSubstrSymbInStr = countSubstrSymbInStr + 1;
    posSubstr = foundPos + 1; 
}
console.log('countSubstrSymbInStr:',countSubstrSymbInStr);
console.log('counSymbInStr', counSymbInStr); // 1 2

// String() Number() Boolean()

// console.log('123:',String(123));
// console.log('-12.3:',String(-12.3));
// console.log('null:',String(null) );
// console.log('undefined:',String(undefined) );
// console.log('true:',String(true));
// console.log('false:',String(false));
// console.log('function () {}:',String(function () {}) );
// console.log('{}:',String({}));
// console.log('{ key: 42 }:',String({ key: 42 }) );
// console.log('[]:',String([]) );
// console.log('[1, 2]:',String([1, 2]));


// console.log(' "123":', Number('123'));
// console.log(' "123.4":', Number('123.4'));
// console.log(' "":', Number(''));
// console.log(' null:', Number(null));
// console.log(' undefined:', Number(undefined));
// console.log('true :', Number(true));
// console.log(' false:', Number(false) );
// console.log(' function () {}:', Number(function () {}));
// console.log(' {}:', Number({}));
// console.log(' []:', Number([]));
// console.log(' [1]:', Number([1]));
// console.log(' [1, 2]:', Number([1, 2]));

// console.log(' "string":', Boolean('string'));
// console.log(' false:', Boolean('false'));
// console.log('"" :', Boolean(''));
// console.log(' 0:', Boolean(0) );
// console.log(' 42:', Boolean(42));
// console.log(' NaN:', Boolean(NaN));
// console.log(' null:', Boolean(null) );
// console.log(' undefined:', Boolean(undefined));
// console.log(' function () {}:', Boolean(function () {}));
// console.log(' {}:', Boolean({}) );
// console.log(' { key: 42 }:', Boolean({ key: 42 }));
// console.log(' []:', Boolean([]));
// console.log(' [1, 2]:', Boolean([1, 2]) );

// obj[Symbol.iterator] = () => {
    
// };

// const obj = { prop1: 123, prop2: 'str', prop3: true };
// const [val1, val2, , val3] = obj;
// for (val of obj) {
//     console.log(val);
// }