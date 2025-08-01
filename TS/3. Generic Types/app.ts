// Generic Type
interface User<Type>{
    name: string,
    age: number,
    data:  Type
}

let user1: User<null> = {
    name:'',
    age: 20,
    data: null
} 
let user2: User<[]> = {
    name:'',
    age: 20,
    data: []
} 
let user3: User<number> = {
    name:'',
    age: 20,
    data: 50
}


interface Product<Type extends {id:string}>{
    name: string,
    reviews: Type,
}

let p1 : Product<{id:string, comments:[]}> = {
    name: '',
    reviews: {id: '', comments: []}
}
let p2 : Product<{id: string, a: string, b:number}> = {
    name: '',
    reviews: {id: '', a:'', b: 20}
}
let p3: Product<{id:string, c: {}, d: number[]}> = {
    name:'',
    reviews: {id:"" , c: {}, d: [34,5654]},

}



