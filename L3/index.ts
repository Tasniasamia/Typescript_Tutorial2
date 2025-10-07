const combine = (input1: number | string, input2: number | string) => {
    return +input1 + +input2;
}
console.log(combine("A","3"))
console.log("ASCII Value is ","A".charCodeAt(0));
let x="20"
console.log("x value is ",+x);


type user={
    name:String,
    roll:number,
    age:number,
    skills:String[]
}

const obj:user={
    name:"Tasnia",
    roll:603,
    age:24,
    skills:["Javascript","Next JS"]
}
const getUser=(user:user)=>{
    return user;
}
console.log("User details are ", getUser(obj));