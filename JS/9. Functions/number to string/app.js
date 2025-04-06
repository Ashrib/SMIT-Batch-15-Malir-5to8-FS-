function greeting(userName) {
    console.log('welcome ' + userName)

}

var a = prompt('enter your')
// shazil
greeting(a);

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




/// cal(opt, num1,num2){
// opt =-*/

// if + sum(num1,num2) 

// }






