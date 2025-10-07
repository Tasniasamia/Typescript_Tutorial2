"use strict";
let a;
let b;
const getIdentity = (user) => {
    console.log('name', user?.name);
    if ('startDate' in user) {
        console.log("date of birth", user?.startDate);
    }
    /*if('age' instanceof user){   //Not suppported instanceof
        console.log("age",user?.age)
    
    }*/
};
class Cat {
    sound() {
        console.log("Meu");
    }
}
class Dog {
    voice() {
        console.log("Gheu");
    }
}
const getClass = (classType) => {
    if ('sound' in classType) {
        classType.sound();
    }
    if ('voice' in classType) {
        classType.voice();
    }
};
const catObj = new Dog();
// const catObj2=new Cat();
getClass(catObj);
//# sourceMappingURL=typeGurd.js.map