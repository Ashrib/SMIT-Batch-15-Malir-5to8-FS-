let age : Number = 20;

let a : boolean = true;
a = false

interface User{
    name: string,
    age?: number,
    id?:number | string,
    email?: string,
    address?: string,  // op
    dob?: Date,
}

let user1 : User = {
    name: 'abc',
    age: 20,
    email: 'abc@gmail.com',
    dob: new Date()
}

let id : number | string = 6578698
id = '987987a';


class UserAcc {
    id: string;
    name: string;

    constructor(name,id){
        this.name = name;
        this.id = id;
    }
}

let userAcc1 : User  = new UserAcc('ali',20);
// let userAcc2 = new UserAcc('abc',3254)

console.log(typeof(a))
console.log(user1 instanceof UserAcc)






let mixArray : (number | string)[] = []
mixArray = ['a']


let users : User[] = [{name:'',age:30}];
