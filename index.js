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