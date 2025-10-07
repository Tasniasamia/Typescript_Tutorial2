declare abstract class Department {
    private id;
    private name;
    constructor(id: String, name: String);
    abstract display(this: Department): void;
}
declare class Child extends Department {
    constructor(id: String, name: String);
    display(): void;
}
declare const obj: Child;
//# sourceMappingURL=classes.d.ts.map