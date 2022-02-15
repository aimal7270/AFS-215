const User = require('./3-1a')

const user1 = new User(15, 3, "Mary", 22)
const user2 = new User(30, 4, "Sue", 48)

console.log("First User")
console.log(user1.addition(user1.num1, user1.num2))
console.log(user1.subtraction(user1.num1, user1.num2))
console.log(user1.multiply(user1.num1, user1.num2))
console.log(user1.divide(user1.num1, user1.num2))
console.log(user1.greet(user1.name, user1.age))
console.log(user1.stringy(user1.num1, user1.num2))


console.log("Second User")
console.log(user2.addition(user2.num1, user2.num2))
console.log(user2.subtraction(user2.num1, user2.num2))
console.log(user2.multiply(user2.num1, user2.num2))
console.log(user2.divide(user2.num1, user2.num2))
console.log(user2.greet(user2.name, user2.age))
console.log(user2.stringy(user2.num1, user2.num2))