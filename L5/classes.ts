abstract class Department{
    private id:String;
    private name:String;

    constructor(id:String, name:String){
        this.id=id;
        this.name=name
    }
    abstract display(this:Department):void;
 
}

class Child extends Department{
constructor(id:String,name:String){
    super(id,name)
}
display() {
    console.log("Hello",this);
}
}

 const obj=new Child("1","Samia");
 obj.display();
