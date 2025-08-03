interface Account{
    id: string;
    age: number;
    status: string;
}

let accounts : Account[]= []

class User{
     id: string;
    status: string;
     age: number

    constructor(id: string, status:string, age: number){
        this.id = id
        this.status = status
        this.age = age
    }

    show(){
        console.log(`id: ${this.id}, status: ${this.status} `)
    }

}
class Admin{
     id: string;
    status: string;
     age: number

    constructor(id: string, status:string, age: number){
        this.id = id
        this.status = status
        this.age = age
    }

    show(){
        console.log(`id: ${this.id}, status: ${this.status} `)
    }


}
let u1 = new User('hgjb','admin', 20)
// console.log(u1.age = 98) error
// u1.show()

function createAccount(acc: 'admin'|'user', id:string, age:number){
    let new_account : Account = (acc==='admin')? new Admin(id,acc,age) : new User(id,acc,age)
    accounts.push(new_account)
}









