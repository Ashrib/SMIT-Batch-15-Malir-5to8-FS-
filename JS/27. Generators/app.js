

function* generator(){
    yield 10
    yield 50

    return 4
}


let result = generator();


// console.log(result.next())
// console.log(result.next())
// console.log(result.next())



function* seq(num){
    for(var i =0; i<num; i++){
        yield i
    }
}
let sequence = seq(100)
console.log(sequence.next())
console.log(sequence.next())
console.log(sequence.next())
console.log(sequence.next())



function* fetchData(){
    let users = fetch('https://users')
    yield users

    let posts = fetch('https://posts')
    yield posts

    return "all data fetch done"

}

let getData = fetchData()


if(getData.next()){
    getData.next()
}