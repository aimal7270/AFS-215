module.exports = class Day{
    constructor(num1){
        this.num1 = num1
    }
    display(){
        if(this.num1 % 3 === 0 && this.num1 % 7 === 0){
            return "Good Evening"
        }
        if(this.num1 % 3 === 0){
            return "Good Morning"
        }
        if(this.num1 % 7 === 0){
            return "Good Afternoon"
        }   
        if(typeof this.num1 != "number"){
            return `Error ${this.num1} is not a number`
        }
        else{
            var stringy = String(this.num1)
            return `${this.num1} is now a ${typeof stringy}`
        }
    }
}