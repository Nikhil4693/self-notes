var Student = /** @class */ (function () {
    //constructor
    function Student() {
    }
    Student.prototype.getWish = function () {
        if (this.studentAge == 18)
            return "18";
        else if (this.studentAge == 20)
            return "20";
        else
            return "don't know";
    };
    return Student;
}());
var student = new Student();
student.studentAge = 15;
student.studentname = 'nana';
console.log(student.getWish());
console.log(student.studentname);
