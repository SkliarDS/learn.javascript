function* strGenerator(){
    yield 'H';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
};

const str = strGenerator();

for(const letter of str){
    console.log('letter:',letter);
}

const iterator = {
    gen (n = 5){
        let i = 0;
        return {
            next (){
                if(i < n ){
                    return {value: ++i, done: false}
                }
                return {value: undefined, done: true}
            }
        }

        
    }
}
console.log('i:',iterator.gen().next());

const iterator2 = {
    from: 5,
    [Symbol.iterator] (){
        let i = 0;
        return {
            from: this.from,
            next(){
                if(i < this.from){
                    return {value: ++i, done: false}
                } else {
                    return {value: undefined, done: true}
                }
            }
        }
    }
}

for(const item of iterator2) {
    console.log('item:',item);
}

function* generator3 (n) {
    for(let i = 0; i < n; i++){
        yield i;
    }
    
}

console.log('gen:',  generator3());

for(let n of generator3(3)){
    console.log('n:',n);
}
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}
  
function* generatePasswordCodes() {
  
    // 0..9
    yield* generateSequence(48, 57);
  
    // A..Z
    yield* generateSequence(65, 90);
  
    // a..z
    yield* generateSequence(97, 122);
  
}
  
let str1 = '';
  
for(let code of generatePasswordCodes()) {
    str1 += String.fromCharCode(code);
}
  
console.log('str1',str1);



let range1 = {
    from: 1,
    to: 5,
    [Symbol.asyncIterator]() { 
        return {
            current: this.from,
            last: this.to,
            async next() { 
                await new Promise(resolve => setTimeout(resolve, 1000)); 
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

(async () => {

    for await (let value of range1) { 
        console.log('value',value);
    }

})()

async function* generateAsync (start, end){
    for(let i = start; i <= end; i++){
        await new Promise(res => setTimeout(res, 1000))
        yield i;
    }
}
(async () => {
    for await (let value of generateAsync(1, 5)){
        console.log('value generateAsync:', value);
    }
})()

function* myGenerator() {
    const x = yield ;
    const y = yield x + 2;
    yield y + 3;
}

const gen = myGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next(10)); // { value: 12, done: false }
console.log(gen.next(15)); // { value: 18, done: false }
console.log(gen.next()); // { value: undefined, done: true }