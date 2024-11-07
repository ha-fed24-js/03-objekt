function makeList(count) {
	let numbers = []
	// let count = 100
	for( let i=1; i<=count; i++ ) {
		// Loopa 100 gånger
		// För varje varv i listan, lägg till ett element
		numbers.push(i)
	}

	console.log( 'makeList:', numbers )
	return numbers
}

// call the function!! (anropa)
let oneHundred = makeList(100)
let ninetyNine = makeList(99)


// Best practice: skicka allt som funktionen behöver som parametrar
// och returnera resultatet
function printList(list) {
	for( let i=0; i<list.length; i++ ) {
		console.log( list[i] )
	}
}

// printList( oneHundred )
// printList( ninetyNine )

function sum(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}

console.log( 'Summan är: ', sum( oneHundred ) )
console.log( sum(makeList(100)) - sum(makeList(99)) )

