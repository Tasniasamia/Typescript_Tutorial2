
//callback
type callbackType=(num1:number,num2:number)=>number;
function add(x,y):callbackType{
    return x+y;
}

console.log("add",add(1,2));



//parameter r type define na kore 
function withoutParameter(a:number,b:number):number{
return a+b;
}
console.log(withoutParameter(11,22));
//callback function 
function example2(m:number,n:number,cb:(num1:number)=>void){
    cb(m+n);
}
example2(12,14,(result)=>{console.log("for callback",result)});

//never data type{
function errorMessage(message:string,statusCode:number):never{
throw {message:message,status:statusCode}
}
errorMessage("Something went wrong",404);


