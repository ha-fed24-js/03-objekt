
function daysInYear() {
	const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	let sum = 0
	// for( let i=0; i<days.length; i++ ) {
	// 	sum += days[i]
	// }
	days.forEach(day => { sum += day })
	return sum
}

function daysBetween(monthFrom, monthTo) {
	const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	// Exempel: daysBetween(1, 2) -> 31+28
	let first = days[monthFrom - 1]
	let sum = 0
	for( let i = monthFrom - 1; i <= monthTo - 1; i++ ) {
		sum += days[i]
	}
	return sum
}
function betterDaysBetween(monthFrom, dayFrom, monthTo, dayTo) {
	// Exempel: (3, 10, 5, 2)
	const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	let daysFirstMonth = days[monthFrom - 1] - dayFrom
	let daysLastMonth = dayTo
	let middle = 0
	for( let i = monthFrom; i < monthTo - 1; i++ ) {
		middle += days[i]
	}
	return daysFirstMonth + middle + daysLastMonth
}


let days = daysInYear()
console.log(`Det går ${days} dagar på ett år (som inte är skottår)`)

console.log(`Dagar mellan mars och maj: ` + daysBetween(3, 5))

let between = betterDaysBetween(1, 30, 3, 2)
console.log(`Dagar mellan 30/1 och 2/3: ` + between)
// 1 + 28 + 2 === 31
