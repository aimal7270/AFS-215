const week6 = require("../week6.js")
const expect = require('chai').expect;

console.log(week6);

it('add item to array', function(){
    
    expect(week6.pushArray('Sunday game is on.')).to.deep.equal(['Sunday game is on.','Sunday game is on.'])
})

it('call the array', function(){
    
    expect(week6.array).to.deep.equal(['Sunday game is on.'])
})

it('remove item from array', function(){
    
    expect(week6.removeArray('Sunday game is on.')).to.deep.equal([])
})

it('Search array for specific item that return true', function(){
    
    expect(week6.searchArray('Sunday game is on.')).to.deep.equal(true)
})

beforeEach(function(){
    week6 = new week6(['Sunday game is on.'])
})

before(function(){
    console.log('The test has just started.')
})

afterEach(function(){
    console.log('The test has completed.')
})

after(function(){
    console.log('GOOD NEWS! aLL the test has completed. ')
})

