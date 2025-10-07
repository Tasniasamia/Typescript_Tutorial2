declare let a: String | Number;
declare let b: Number & Boolean;
type admin = {
    name: String | Number;
    designation: Number | Boolean;
};
type employee = {
    name: String | Number;
    startDate: Date;
    age: String & Number;
};
declare const getIdentity: (user: admin | employee) => void;
declare class Cat {
    sound(): void;
}
declare class Dog {
    voice(): void;
}
type vehicle = Cat | Dog;
declare const getClass: (classType: Cat | Dog) => void;
declare const catObj: Dog;
//# sourceMappingURL=typeGurd.d.ts.map