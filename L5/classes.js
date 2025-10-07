"use strict";
class Department {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Child extends Department {
    constructor(id, name) {
        super(id, name);
    }
    display() {
        console.log("Hello", this);
    }
}
const obj = new Child("1", "Samia");
obj.display();
//# sourceMappingURL=classes.js.map