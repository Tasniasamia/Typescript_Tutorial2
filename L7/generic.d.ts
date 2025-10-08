type practiceType = {
    name: String;
    roll: Number;
};
declare const user4: practiceType;
declare const user6: Object;
declare const fruits: Array<practiceType>;
declare function addition<T, U>(a: T, b: U): {
    a: T;
    b: U;
};
declare function getApiData<T extends String, U extends Object, V extends Object[]>(name: T, obj: U, arr: V): {
    database: T;
    data: U & {
        docs: V;
    };
};
interface Box<T> {
    value: T;
}
declare const a: Box<number>;
declare const b: Box<String>;
interface getDynamic<T, U, V, I, K> {
    userName: T;
    email: U;
    phoneNumber: V;
    designation: I;
    age: K;
}
declare const getDynamicUser: getDynamic<String, String, String, String, Number>;
declare function addSum<T extends number, U extends number>(a: T, b: U): void;
type serviceType<T, U, V> = {
    service_name: T;
    price: U;
    Type: V;
};
declare const service: serviceType<String, Number, String>;
declare class FindClass<T, U, V> {
    record: T;
    constructor(record: T);
    display(): void;
}
declare const findObj: FindClass<string, number, Object>;
declare function getArry<T>(arr: T[]): void;
declare function getObject<T>(arr: T): void;
//# sourceMappingURL=generic.d.ts.map