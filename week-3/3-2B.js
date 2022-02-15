const Day = require('./3-2a')

const morning = new Day(3)
const morning2 = new Day(6)
const afternoon = new Day(7)
const afternoon2 = new Day(14)
const evening = new Day(21)
const stringy = new Day(10)
const errorHere = new Day("hello")


console.log(morning.display(morning))
console.log(morning2.display(morning2))
console.log(afternoon.display(afternoon))
console.log(afternoon2.display(afternoon2))
console.log(evening.display(evening))
console.log(stringy.display(stringy))
console.log(errorHere.display(errorHere))