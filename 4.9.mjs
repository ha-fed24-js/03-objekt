let deck = [];

//kallar på funktionen som ska lägga in antalet kort jag vill ha i deck
deck = makeDeck(5);
// console.log( makeDeck(3) )
console.log('Kortleken innehåller korten: ', deck)
let top = peekTop()  // global variabel
console.log('Översta kortet är: ', top)

top = draw()
console.log('Vi drog kortet: ', top)
top = peekTop()
console.log('Nu är översta kortet: ', top)

putBottom(10)
// console.log('Efter tillägg är kortleken:', deck)
printDeck()


function makeDeck(numberOfCards) {
    // vi måste loopa för varje kort som ska in
    for (let i = 1; i <= numberOfCards; i++) {
        // push lägger in ett nytt element i slutet av en array
        deck.push(i);
    }
    // console.log(deck);
	return deck
}

function peekTop() {
	// översta kortet har index === 0
	let top = deck[0]  // top är en lokal variabel
	return top
}

function draw() {
	let card = deck.shift()  // första elementet
	return card
}

function putBottom(cardNumber) {
	deck.push(cardNumber)
}
// TODO: putTop, med hjälp av unshift

function printDeck() {
	console.log('Kortleken innehåller:')
	for( let i=0; i<deck.length; i++ ) {
		console.log( '- ' + deck[i] )
	}
}

// Motsatsfunktioner:
// shift - unshift
// unshift - push
