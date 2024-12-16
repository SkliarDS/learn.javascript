export function bye(time) {
    setTimeout(() => console.log(`Пока`), time)
    
}
export function hi(time) {
    return new Promise((res) => {
        setTimeout(() => {
            console.log(`Привет`);
            res(true);
        }, time)
    })     
}

