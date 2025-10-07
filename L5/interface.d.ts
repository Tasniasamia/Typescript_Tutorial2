interface add {
    name: String;
    age: String;
    add(a: number, b: number): void;
    add2(a: number, b: number): void;
}
declare class Example implements add {
    name: string;
    age: string;
    add: (a: number, b: number) => void;
    add2: (a: number, b: number) => void;
    func1: (a: String, b: String) => String;
}
declare const obj2: Example;
interface interface1 {
    (num1: number, num2: number): void;
}
declare const getSum: interface1;
interface example1 {
    user: String;
    age: number;
}
interface example2 extends example1 {
    add(a: number, b: number): void;
}
declare class Example2 implements example2 {
    user: String;
    age: number;
    constructor(user: String, age: number);
    add: (a: number, b: number) => void;
}
declare const opabj: Example2;
//# sourceMappingURL=interface.d.ts.map