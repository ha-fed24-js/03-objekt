/*
// fun tar emot en annan funktion som parameter
// den är en annan sorts funktion - en "higher order"
function fun(f) {
	f()  // good()
}

function good() {
	console.log('Hello')
}

// en funktion som returnerar en annan funktion - higher order
function better() {
	return good
}

good()
fun( good )

let f = better()
f()
*/


let exempel = [3, 5, 76, 9]

function myForEach(callback) {
	for( let i=0; i<exempel.length; i++ ) {
		let item = exempel[i]
		callback(item)
	}
}
function otherStuff(item) {
	console.log('Take a look at: ' + item)
}
const other2 = item => { console.log('Take a look at: ' + item) }

function square(number) {
	console.log( number * number )
}

// myForEach( otherStuff )
// myForEach( square )
//
// exempel.forEach( otherStuff )
// exempel.forEach( other2 )



function myMap(list, callback) {
	let newList = []
	for( let i=0; i<list.length; i++ ) {
		let item = list[i]
		let result = callback(item)
		newList.push(result)
	}
	return newList
}
// exempel.map( callback )

function increase(x) {
	return x + 1
}
function halve(x) {
	return x / 2
}
// increase(4)  // returnerar 5

const data = [10, 11, 12]
const updated = myMap(data, increase)  // data.map(increase)
const updated2 = myMap(data, halve)    // data.map(halve)


console.log( 'Den gamla listan:           ', data )
console.log( 'Den nya, uppdaterade listan:', updated )
console.log( 'Nyare uppdaterad lista:     ', updated2 )

// Set, Map, Array, LinkedList, HashTable...
// Alternativ till att använda vanliga listor
// HashTable bygger på key/value pairs


