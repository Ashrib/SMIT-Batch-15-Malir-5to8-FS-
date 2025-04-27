var user = {
  name: 'ali',
  age: 20,
  city: ['karachi','lahore'],
  address: {
    postalCode: 1111,
    street: '2nd',
    houseNo: 'A-11'
  },

}
user.age = 30;
user.weight = 70;

console.log(user)

delete user.weight

console.log(user)
var check = "address" in user
console.log(check)

var data = [
  {
    name: 'ali',
    age: 20,
    city: ['karachi','lahore'],
    address: {
      postalCode: 1111,
      street: '2nd',
      houseNo: 'A-11'
    },
    showCities: function (){
      for(var i=0; i<this.city.length; i++){
        console.log(this.city[i])
      }
    }
  },
  {
    name: 'ali',
    age: 20,
    city: ['karachi','lahore'],
    address: {
      postalCode: 1111,
      street: '2nd',
      houseNo: 'A-11'
    },
  
  },
  {
    name: 'ali',
    age: 20,
    city: ['karachi','lahore'],
    address: {
      postalCode: 1111,
      street: '2nd',
      houseNo: 'A-11'
    },
  
  }
];

console.log(data[0])
data[0].showCities()

var userResult = {
  grade: 'A',
  totalMarks: 500,
  obtMarks: 400,
  percent: function (){
    return (this.obtMarks/this.totalMarks )* 100
  },
}
console.log(userResult.percent())




// constructor
function User(name,age){
  this.name = name;
  this.class = "A";
  this.age = age;
  this.show = function(){
    console.log('name:' +this.name, "age:", this.age)
  };
}

var user1 = new User('ali',30)
var user2 = new User('usman',30)
console.log(user1)
console.log(user2)
user1.show();






for(key in user){
  console.log(key,":", user[key])
}




