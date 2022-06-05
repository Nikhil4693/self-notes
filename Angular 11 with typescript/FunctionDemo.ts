function addNumbers(d:number,b:number):number{
return d+b;
}
console.log(addNumbers(5,10));

function tellName(d:string):string{
    return d;
    }
console.log(tellName('nkur'));


let substract=function(a:number,b:number) : number{
    return a-b;
}
console.log(substract(100,50));


let wishMe=function( msg:string,names:string="ankur"):string{
    return msg+' '+names;
}
// console.log(wishMe('GM','nikhil'));
// console.log(wishMe('Hii'));

// GM nikhil
// Hii ankur

function showNames(...z:string[]){
    console.log(z);
    }
    showNames('aa','dd');   