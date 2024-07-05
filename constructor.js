/*
[Конструктор заказа. Основы. learnjs 1.1..1.4]
1. написать функцию конструктор для заказа в магазине.
Новый инстанс - новый заказ
у него будут методы
addItem(item, count) - добавить итем в чек (+ имя +цена)
removeItem(item, count) - убрать из чека count итемов (если не указано сколько - убрать все). Нельзя убрать больше чем было в чеке
getCheck() - получить информацию сколько каких итемов в чеке, общую цену, опционаольно цену за каждую позицию (за 3 пивка - 300р). Формат произвольный, чтобы был читабельный
lockOrder() - после вызова метода функции addItem/removeItem не должны делать что-либо. Можно как-то сообщать об ошибке, можно просто молча.
unlockOrder() - убрать блокировку заказа - снова можно добавлять итемы

Формат item - объект с 1. названием итема 2. ценой за штуку. 2 итема с одинаковым именем считаем одной позицией в чеке

3. использовать отладку (debugger) при решении в хроме. Если получится без отладки - самому допустить ошибку и найти ее при отладке через интерфейс девтулзов

*/ 


function Order(product){
    this.product = product;
    this.productTotalPrice = 0;
    this.productItems = {};
    this.productCount = 0;

    this.addItem = function(item, count, price){
        let newItems = {
            name: item,
            count: count,
            price: price,
            totalPrice: count * price,
        };
        this.productItems[item] = newItems;
        this.productCount = Object.keys(this.productItems).length;
        for(let key in newItems) {
            if (key == 'totalPrice') {
                this.productTotalPrice = newItems[key] * this.productCount;                
            };
        };        
    };

    this.removeItem = function(item, count){
        let currentCount = 0;
        for(let key in this.productItems){            
            if(key == item){
                this.productItems[key].count = this.productItems[key].count - count;
                this.productItems[key].totalPrice = this.productItems[key].count * this.productItems[key].price;
            }
        }
    };

};

let product = new Order('Заказ № 1');
product.addItem('Kozel', 5, 120);
// product.addItem('Kozel', 4, 120);
product.addItem('Kozellll', 4, 120);
product.addItem('Baltika', 5, 120);
console.log('product.addItem:',product);
product.removeItem('Kozel', 2);
console.log('product.removeItem:',product);

let product1 = new Order('Bread');
product1.addItem('Minskiy', 2, 30);
console.log('product1:',product1); 