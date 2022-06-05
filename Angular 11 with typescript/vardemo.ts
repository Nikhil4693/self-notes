var age: number = 12;

function getAge() {
    var age: number = 25;
    console.log('Inside function age:', age);
}

getAge();
console.log('Outside function age:', age);

var index = 0;
for (let index = 0; index <= 5; index++) {
    console.log('inside for loop index:', index);
}
console.log('outside index:', index);
console.log("--------------------let demo------------------------");

function disply() {
    let msg: string = "nikhil";
    console.log('outside block:',msg);
    {
        let msg: string = "ankur";
        console.log('inside block:', msg);
    }
    console.log('outside block:',msg);
}
disply();
// output:
// --------------------let demo------------------------
// outside block: nikhil
// inside block: ankur
// outside block: nikhil


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
