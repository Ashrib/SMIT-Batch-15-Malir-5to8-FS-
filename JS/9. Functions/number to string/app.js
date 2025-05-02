function greeting(userName) {
    console.log('welcome ' + userName)

}

// var a = prompt('enter your')
// shazil
// greeting(a);

// hamza
greeting('hamza');


function sum(a, b){
    console.log(a+b);
}
sum(5,5);

function percentage(totalMarks, obtMarks){
    var per = obtMarks/totalMarks * 100;
    return per;
}

var calPer = percentage(500, 400);
console.log(calPer);


function grades(per){
    if(per >=90){
        return 'A';
    }
    else if (per >= 80) {
        return 'B';
    } 
    return 'C'
}


function result(fName, age,total,obt){
    var a = percentage(total, obt);
    var b = grades(a);
    console.log('std name: ' , fName, 'age: ', age)
    console.log('perentage: ' , a, 'grade: ', b)
}


result('ali',20, 500,450)
result('ali',20, 500,300)



    
var a = 5;
function fun(){
    var b = 10;
    // if(true){
        a = 0;
        console.log('a:',a)
    // }
}
fun()

console.log('a:',a);
// console.log('b:',b);

// 5!
// 5*4*3*2*1

function factorial(n){
    if(n == 1 || n == 0){
        return 1
    }
    return n * factorial(n-1);
}
console.log(factorial(5));
// return 5  *  4  * 3  *  2  * 1 



function optGenerate(){
    return Math.round(Math.random()*900 + 1000);
}

console.log(optGenerate())
console.log(optGenerate())


// higher order functions
function showName(){
    console.log('Ali')
}
function greet(callBack){
    console.log('hello!');
    callBack()
}
greet(showName)

function multi(x){
        return function(y){
            return x *y
        }
}
var multiOf5 = multi(5);
var multiOf8 = multi(8);

console.log(multiOf5(10));
console.log(multiOf5(4));
console.log(multiOf8(5));
