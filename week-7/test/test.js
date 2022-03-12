const chai = require('chai')
const expect = chai.expect
const AppList = require('../capstone')

it('add item to array ', function(){
	
		expect(appList.pushArray('Cricket game is on For sunday')).to.deep.equal(['Cricket game is on For sunday']) 

})
it('add multiple items to the array ', function(){
	
		expect(appList.pushArray('Cricket game is on For sunday',"Need to practice batting",'Warm up befor','Catching practice',1,2,true,{ground:'Silver Star'})).to.deep.equal
        (['Cricket game is on For sunday',"Need to practice batting",'tom tom','Catching practice',1,2,true,{ground:'Silver Star'}]) 

})

it('delete item from the array ', function(){
	
    appList.pushArray('Cricket game is on For sunday',"Need to practice batting",'Warm up befor','Catching practice',1,2,true,{ground:'Silver Star'})
		expect(appList.removeArray('Cricket game is on For sunday')).to.deep.equal(["Need to practice batting",'Warm up befor','Catching practice',1,2,true,{ground:'Silver Star'}]) 

})

it('delete the last random item from the array ', function(){
	
    appList.pushArray('Cricket game is on For sunday',"Need to practice batting",'Warm up befor','floor tom',1,2,true,{ground:'Silver Star'})
		expect(todoList.removeArray('floor tom')).to.deep.equal(['Cricket game is on For sunday','Need to practice batting','Warm up befor',1,2,true,{ground:'Silver Star'}]) 

})

it('delete a random item from the array ', function(){
	
    appList.pushArray('Cricket game is on For sunday',"Need to practice batting",'Warm up befor','floor tom',1,2,true,{ground:'Silver Star'})
		expect(appList.removeArray('Warm up befor')).to.deep.equal(['Cricket game is on For sunday',"Need to practice batting",'floor tom',1,2,true,{ground:'Silver Star'}]) 

})

beforeEach(function(){
	appList = new AppList()
})
before(function(){
	console.log('The test has started*')
})

afterEach(function(){
	appList.removeArray
	console.log('Test completed')
})

after(function(){
	console.log('Great all the tests completed')
})
