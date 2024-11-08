// constructor 構造函數
// .this 指向創建實例對象的屬性/類
// .new 構建
// extends 繼承
// super 繼承父級函數，需在this之前使用

// 一般使用與基本函數
class People {
    constructor(gender = "unknow") {
        this.gender = gender;
    }
    sing() {
        console.log('a ' + this.gender + " is singing.");
    }
}
class Dog {
    constructor(name = 'unknow', age = 'unknow') {
        this.name = name;
        this.age = age;
    }
    worf() {
        console.log(this.name + "正在汪汪叫");
    }
}

const dogA = new Dog('Ash', 6);
const girl = new People('girl');

dogA.worf();
girl.sing();

// class extends，自生成原型鏈
class Father {
    constructor(money = 0) {
        this.money = money;
    }
}
class Son extends Father {
    constructor(money) {
        super(money)
    }
}

const fatherMoney = new Father(5000);
const sonMoney = new Son(fatherMoney.money); //繼承父類的money

console.log(fatherMoney.money);
console.log(sonMoney.money);
