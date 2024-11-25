try {
    sdfsldkfj;
} catch(e) {
    console.log("e", e);
    console.log("e.name", e.name);
    console.log("e.message", e.message);
    console.log("e.stack", e.stack);
}

let json = '{"name":"John", "age": 30}';
let json1 = "{ некорректный JSON }";
let json2 = '{"age": 30}';
try {
    let user = JSON.parse(json);
    if(!user.lastName){
        throw new Error('Not lastName')
    }
    console.log('user:',user.name);
} catch(error) {
    console.log("error:", error);
}

try {

    let user = JSON.parse(json);
  
    if (!user.name) {
        throw new SyntaxError("Данные неполны: нет имени");
    }
  
    // blabla();
  
    console.log( user.name );
  
} catch(e) {
  
    if (e.name == "SyntaxError") {
        console.log( "JSON Error: " + e.message );
    } else {
        throw e; 
    }
    console.log('e:',e);
} finally {
    console.log('finally:',);
}

function func() {

    try {
        return 1;
  
    } catch (e) {
        /* ... */
    } finally {
        alert( 'finally' );
    }
}
  
alert( func() ); 

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name; 
    }
}

function test(){
    throw new ValidationError('ERROR')
}

function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
        throw new ValidationError("Нет поля: age");
    }
    if (!user.name) {
        throw new ValidationError("Нет поля: name");
    }
  
    return user;
} 

try {
    let user = readUser('{"age": 10}');
} catch(err){
    if(err instanceof ValidationError){
        console.log("Некорректные данные: " + err.message);
    }else if (err instanceof SyntaxError) {
        console.log("JSON Ошибка Синтаксиса: " + err.message);
    } else {
        throw err; 
    }
}

class FormatError extends SyntaxError {
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatError('Error FormatError');

console.log('error.message:',err.message);
console.log('error.name:',err.name);
console.log( err instanceof SyntaxError );