module.exports = class User{
    constructor(num1, num2, name, age){
        this.num1 = num1
        this.num2 = num2
        this.name = name
        this.age = age
    }

    addition(){
        return this.num1 + this.num2
    }
    subtraction(){
        return this.num1 - this.num2
    }
    multiply(){
        return this.num1*this.num2
    }
    divide(){
        return this.num1 / this.num2
    }

    greet(){
        return `Hello, ${this.name}. You are ${this.age} years old`
    }

    stringy(){
        let num3 = String(this.num1)
        let num4 = String(this.num2)
        return(num3+num4)
    }
    dataType(num){
        return typeof(num)
    }
}