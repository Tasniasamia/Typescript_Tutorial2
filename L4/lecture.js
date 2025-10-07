function add(x, y) {
    return x + y;
}
console.log("add", add(1, 2));
//parameter r type define na kore 
function withoutParameter(a, b) {
    return a + b;
}
console.log(withoutParameter(11, 22));
//callback function 
function example2(m, n, cb) {
    cb(m + n);
}
example2(12, 14, function (result) { console.log("for callback", result); });
//never data type{
function errorMessage(message, statusCode) {
    throw { message: message, status: statusCode };
}
errorMessage("Something went wrong", 404);
