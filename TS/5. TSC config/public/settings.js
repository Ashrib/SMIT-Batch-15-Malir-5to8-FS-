"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 20;
let a = true;
a = false;
let user1 = {
    name: 'abc',
    age: 20,
    email: 'abc@gmail.com',
    dob: new Date()
};
let id = 6578698;
id = '987987a';
class UserAcc {
    id;
    name;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
let userAcc1 = new UserAcc('ali', 20);
// let userAcc2 = new UserAcc('abc',3254)
console.log(typeof (a));
console.log(user1 instanceof UserAcc);
let mixArray = [];
mixArray = ['a'];
let users = [{ name: '', age: 30 }];
//# sourceMappingURL=settings.js.map