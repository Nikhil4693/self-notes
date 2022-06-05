function addNumbers(d, b) {
    return d + b;
}
console.log(addNumbers(5, 10));
function tellName(d) {
    return d;
}
console.log(tellName('nkur'));
var substract = function (a, b) {
    return a - b;
};
console.log(substract(100, 50));
var wishMe = function (msg, names) {
    if (names === void 0) { names = "ankur"; }
    return msg + ' ' + names;
};
// console.log(wishMe('GM','nikhil'));
// console.log(wishMe('Hii'));
// GM nikhil
// Hii ankur
function showNames() {
    var z = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        z[_i] = arguments[_i];
    }
    console.log(z);
}
showNames('aa', 'dd');
