var age = 20;
var a = true;
a = false;
var user1 = {
    name: 'abc',
    age: 20,
    email: 'abc@gmail.com',
    dob: new Date()
};
var id = 6578698;
id = '987987a';
var UserAcc = /** @class */ (function () {
    function UserAcc(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAcc;
}());
var userAcc1 = new UserAcc('ali', 20);
// let userAcc2 = new UserAcc('abc',3254)
console.log(typeof (a));
console.log(user1 instanceof UserAcc);
var mixArray = [];
mixArray = ['a'];
var users = [{ name: '', age: 30 }];
