var age = 12;
function getAge() {
    var age = 25;
    console.log('Inside function age:', age);
}
getAge();
console.log('Outside function age:', age);
var index = 0;
for (var index_1 = 0; index_1 <= 5; index_1++) {
    console.log('inside for loop index:', index_1);
}
console.log('outside index:', index);
console.log("--------------------let demo------------------------");
function disply() {
    var msg = "nikhil";
    console.log('outside block:', msg);
    {
        var msg_1 = "ankur";
        console.log('inside block:', msg_1);
    }
    console.log('outside block:', msg);
}
disply();
// output
// Inside function age: 25
// Outside function age: 12
// inside for loop index: 0
// inside for loop index: 1
// inside for loop index: 2
// inside for loop index: 3
// inside for loop index: 4
// inside for loop index: 5
// outside index: 6
