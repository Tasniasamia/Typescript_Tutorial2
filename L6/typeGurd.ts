let a:String | Number;
let b:Number & Boolean;
type admin={
    name:String | Number,
    designation:Number | Boolean,
}

type employee={
    name:String | Number,
    startDate:Date,
    age:String & Number
}

const getIdentity=(user:admin|employee)=>{
console.log('name',user?.name);
if('startDate' in user){
    console.log("date of birth",user?.startDate);

}
/*if('age' instanceof user){   //Not suppported instanceof
    console.log("age",user?.age)  

}*/
}

class Cat{
    sound(){
        console.log("Meu")
    }
}
class Dog {
    voice(){
        console.log("Gheu")
    }
}

type vehicle=Cat|Dog;
const getClass=(classType:Cat|Dog)=>{
 if('sound' in classType){
    classType.sound();

 }
 if('voice' in classType){
    classType.voice();

 }
}
const catObj=new Dog();
// const catObj2=new Cat();

getClass(catObj);




