module.exports = class classCricket{
    constructor(array){
        this.array = array || []
    }
    pushArray = (item) => {
        this.array.push(item)
        return this.array
    }
    removeArray = (item) => {
        this.array = this.array.filter((find) => find != item)
        return this.array
    }
    searchArray = (item) => {
        if (this.array.includes(item) === true){
            return true
        }
        else {
            return "There is an error."
        }
    }
}
