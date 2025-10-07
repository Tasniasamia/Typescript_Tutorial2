var combine = function (input1, input2) {
    return +input1 + +input2;
};
console.log(combine("A", "3"));
console.log("ASCII Value is ", "A".charCodeAt(0));
var x = "20";
console.log("x value is ", +x);
var obj = {
    name: "Tasnia",
    roll: 603,
    age: 24,
    skills: ["Javascript", "Next JS"]
};
var getUser = function (user) {
    return user;
};
console.log("User details are ", getUser(obj));
