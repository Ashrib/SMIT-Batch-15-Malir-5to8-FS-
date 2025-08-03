function sum(a:number ,b: number){
    console.log(a+b)
}
sum(5,5)

function total(a:number  ,b: number) : number{
    return a+b
}
let res : number = total(4,5);

function showData<Type, Type2 extends {id:string}>(data:Type , info: Type2){

}
showData<number[], {id:string}>([6], {id:''})
showData<number, {id: string, b:number}>(6, {id: 'abc', b:30})
showData<number, {id: string, b:number,c:string}>(6, {id: 'abc', b:30, c:''})


type accountType = 'admin' | 'not-admin'

function account(acc: accountType) {

    return acc
}

account('admin')


