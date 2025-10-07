"use strict";
// interface Interface1 {
//     name: string;
//     age: number;
//     add(a: number, b: number): void;
//   }
class Example {
    name = "Tasnia";
    age = "12";
    add = (a, b) => {
        console.log(a + b);
    };
    add2 = (a, b) => {
        console.log(a + b);
    };
    func1 = (a, b) => {
        return a.toString() + b.toString();
    };
}
const obj2 = new Example();
console.log(obj2.func1("1", "2"));
const getSum = (a, b) => {
    console.log(a + b);
};
getSum(11, 22);
class Example2 {
    user;
    age;
    constructor(user, age) {
        this.user = user;
        this.age = age;
    }
    add = (a, b) => {
        console.log(a + b);
    };
}
const opabj = new Example2("Sharin", 18);
opabj.add(1, 2);
//# sourceMappingURL=interface.js.map