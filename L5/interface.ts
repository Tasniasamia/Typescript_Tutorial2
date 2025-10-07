// interface Interface1 {
//     name: string;
//     age: number;
//     add(a: number, b: number): void;
//   }


/*Interface All */
interface add{
    name:String,
    age:String,
    add(a:number,b:number):void
    add2(a:number,b:number):void

}
  
  class Example implements add {
    name = "Tasnia";
    age = "12";
    add=(a:number,b:number):void=>{
        console.log(a+b);
     }
    add2=(a:number,b:number):void=>{
        console.log(a+b);
    }
    func1=(a:String,b:String):String=>{
     return a.toString() +b.toString();
   };
  
    
  }
  
  const obj2 = new Example();
  console.log(obj2.func1("1","2"));

//Anonymouse Interface (Call Signature Interface)
interface interface1{
    (num1:number,num2:number):void
}
const getSum:interface1=(a,b)=>{
    console.log(a+b);
}
getSum(11,22);


//interface can extends another interface

interface example1{
    user:String,
    age:number
}
interface example2 extends example1{
    add(a:number,b:number):void
}
class Example2 implements example2 {
 user:String;
 age:number;
 constructor(user:String,age:number){
    this.user=user;
    this.age=age;
 }
 add=(a:number,b:number):void=>{
    console.log(a+b);
 }


}
const opabj=new Example2("Sharin",18);
opabj.add(1,2);