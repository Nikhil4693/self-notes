class Student{
    //constructor
    
    constructor(name:string,age:number){
        this.studentAge=age;
        this.studentname=name;
    }
    //variable declaration
    studentname:string;
    studentAge:number;

    //method definition
    getWish():string{
        if(this.studentAge==18)
        return "18";
        else if(this.studentAge==20)
        return "20";
        else return "don't know";
    }


}

let student=new Student('NANA',55);
student.studentAge=15; //overriding 
student.studentname='nana';

console.log(student.getWish());
console.log(student.studentname);
