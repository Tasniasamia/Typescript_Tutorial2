"use strict";
const user4 = {
    name: "Samia",
    roll: 12,
};
const user6 = {
    name: "Sami2a",
    roll: "12",
};
console.log("user6", user6);
const fruits = [];
fruits.push({ name: "Disha", roll: 12 });
fruits.push({ name: "Tisha", roll: 22 });
fruits.push({ name: "Isha", roll: 42 });
console.log("fruits", fruits);
function addition(a, b) {
    return { a, b };
}
console.log(addition(1, 2));
// U & { docs: V } মানে হচ্ছে
// "obj এর সব property + docs নামে নতুন property"
// (অর্থাৎ তুমি object spread এর মতোই কাজ করছো, কিন্তু type-safe ভাবে)
function getApiData(name, obj, arr) {
    return {
        database: name,
        data: { ...obj, docs: arr }
    };
}
console.log(getApiData('User', { totalDocs: 20, hasNextPage: true, hasPrevPage: false, limit: 8 }, [{ name: "Tasnia", roll: 12 }]));
const a = {
    value: 12
};
console.log("a", a);
const b = {
    value: "Value"
};
console.log("b", b);
const getDynamicUser = {
    userName: "Tasnia",
    email: "tasnia@gmail.com",
    phoneNumber: "01921451867",
    designation: "Developer",
    age: 20
};
console.log("getDynamicUser", getDynamicUser);
function addSum(a, b) {
    console.log(a + b);
}
addSum(111, 1111);
const service = {
    service_name: "PowerSupply",
    price: 560,
    Type: "electrical"
};
class FindClass {
    record;
    constructor(record) {
        this.record = record;
    }
    display() {
        console.log("record", this.record);
    }
}
const findObj = new FindClass("University");
findObj.display();
//By Array
function getArry(arr) {
    let i;
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
getArry([1, 2, 3, 4]);
//Find Error
// function getArryWithoutSymbol<T>(arr:T){
//     let i;
//     for(i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }
// getArryWithoutSymbol([1,2,3,4])
function getObject(arr) {
    if (typeof arr === "object") {
        for (let key in arr) {
            console.log((arr[key]));
        }
    }
    else {
        for (let i in arr) {
            console.log((arr[i]));
        }
    }
}
getObject([1, 2, 3, 4]);
// getObject({ a: 1, b: 2, c: 3, d: 4 });
//Find Error Not Working
// const getTecnicValue=<T,U>(x:T,y:U):T+U=>x+y
// function addService<T,U>(a:T,b:U){
//     getTecnicValue(a,b);
// }
// console.log(addService<number,number>(12,33))
//# sourceMappingURL=generic.js.map