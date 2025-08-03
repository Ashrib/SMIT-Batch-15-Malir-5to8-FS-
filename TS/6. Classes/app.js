var User = /** @class */ (function () {
    function User(id, status) {
        this.id = id;
        this.status = status;
    }
    User.prototype.show = function () {
        console.log("id: ".concat(this.id, ", status: ").concat(this.status, " "));
    };
    return User;
}());
var u1 = new User('hgjb', 'admin');
console.log(u1.id);
// u1.show()
