// import { greeting } from './functions.mjs'

// let str = '     Exempel      '
// console.log( str.toLowerCase() )
// console.log( str.trim() )

// greeting('David')


// 2b Vad skrivs ut av koden?
function nextMonth(month) {
	if( month >= 12 ) {
		month = month - 12
	}
    month = month + 1
    return month
}
let currentMonth = nextMonth(10)  // x === 11
console.log( currentMonth )

let i = 'test'
let x = 'x'

for(  i=0; i<5; i++ ) {
	currentMonth = nextMonth(currentMonth)
	console.log( currentMonth )
	x = 'y'
}

console.log('i: ', i)
console.log('x: ', x)
