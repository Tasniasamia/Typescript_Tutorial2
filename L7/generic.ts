type practiceType={
    name:String,
    roll:Number,

}
const user4:practiceType={
    name:"Samia",
    roll:12,
}
const user6:Object={
    name:"Sami2a",
    roll:"12",
}
console.log("user6",user6);

const fruits:Array<practiceType>=[];
fruits.push({name:"Disha",roll:12});
fruits.push({name:"Tisha",roll:22});
fruits.push({name:"Isha",roll:42});
console.log("fruits",fruits);

function addition<T,U>(a:T,b:U){
return {a,b};
}
console.log(addition(1,2));

// U & { docs: V } মানে হচ্ছে
// "obj এর সব property + docs নামে নতুন property"
// (অর্থাৎ তুমি object spread এর মতোই কাজ করছো, কিন্তু type-safe ভাবে)
function getApiData<T extends String, U extends Object,V extends Object[]>(name:T,obj:U,arr:V):{database:T,data:U & {docs:V}}{
return {
    database:name,
    data:{...obj,docs:arr}
}
}
console.log(getApiData('User',{totalDocs:20,hasNextPage:true,hasPrevPage:false,limit:8},[{name:"Tasnia",roll:12}]))


// interface

interface Box<T>{
    value:T
}
const a:Box<number>={
    value:12
}
console.log("a",a);
const b:Box<String>={
    value:"Value"
}
console.log("b",b);


interface getDynamic<T,U,V,I,K>{
    userName:T,
    email:U,
    phoneNumber:V,
    designation:I,
    age:K
}
const getDynamicUser:getDynamic<String,String,String,String,Number>={
    userName:"Tasnia",
    email:"tasnia@gmail.com",
    phoneNumber:"01921451867",
    designation:"Developer",
    age:20
}
console.log("getDynamicUser",getDynamicUser)

function addSum<T extends number,U extends number>(a:T,b:U){
    console.log(a+b);
}
addSum(111,1111);

type serviceType<T,U,V>={
service_name:T,
price:U,
Type:V

}
const service:serviceType<String,Number,String>={
service_name:"PowerSupply",
price:560,
Type:"electrical"
}

class FindClass<T,U,V>{
    public record:T;
    constructor(record:T){
        this.record=record
    }
    display(){
        console.log("record",this.record);
    }
}
const findObj=new FindClass<string,number,Object>("University");

findObj.display();

//By Array
function getArry<T>(arr:T[]){
    let i;
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

getArry([1,2,3,4])

//Find Error
// function getArryWithoutSymbol<T>(arr:T){
//     let i;
//     for(i=0;i<arr.length;i++){
//         console.log(arr[i]);
//     }
// }

// getArryWithoutSymbol([1,2,3,4])



function getObject<T>(arr: T) {
    if(typeof arr === "object"){
        for (let key in arr) {
            console.log((arr[key]));
        }
    }
  else{
    for (let i in arr) {
        console.log((arr[i]));
    }
  }

}

getObject([1,2,3,4])
// getObject({ a: 1, b: 2, c: 3, d: 4 });




//Extreme example

function extemeExample<T extends object,K extends keyof T>(obj:T,key:K):T[K]{
return obj[key];
}
const userExmp={
    name:'Farhan',
    age:12
}

console.log(extemeExample(userExmp,"name"))

















//Find Error Not Working
// const getTecnicValue=<T,U>(x:T,y:U):T+U=>x+y
// function addService<T,U>(a:T,b:U){
//     getTecnicValue(a,b);
// }
// console.log(addService<number,number>(12,33))
