// Enums
enum OrderStatus{
    pending = 'order pending',
    readyTodeliever = 'order is ready to deliever',
    confirmed = 'order is confirmed',
}
enum Status{
    a = "YES",
    b = "NO",
}


interface Order{
    productName: string;
    price: number;
    status: string;
}


let order1 : Order = {
    productName: 'xyz',
    price: 2000,
    status: OrderStatus.pending
}
let order2 : Order = {
    productName: 'abc',
    price: 5000,
    status: OrderStatus.readyTodeliever
}
let order3 : Order = {
    productName: 'abc',
    price: 5000,
    status: OrderStatus.confirmed
}





