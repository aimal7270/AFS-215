class AppList{
    constructor(array){
        this.array = array || []
    }
    display(){
        return this.array
    }
    
    pushArray = (...items) =>
    {
        for(var i = 0; i < items.length; i++){
            this.array.push(items[i])
        }
        // this.array.push(items)
        return this.array
    } 

    removeArray = (item) =>
    {
    this.array = this.array.filter((find)=>find!=item ) 
        return this.array
    } 

    searchArray = (item) =>
    {
        if (this.array.includes(item) === true){
            return true
        }else{return "There was an error.Something went wrong. "}
        } 
    
}

module.exports = AppList