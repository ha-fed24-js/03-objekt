
// for( let i=0; i<10; i++ ) {
// 	console.log(i)
// }

let age = 5
let age2 = 8
let age3 = 7
let age4 = 5
// let children = {  // Bad example
// 	age1: 5,	age2: 8,
// 	age3: 7, 	age4: 5
// }
let ages = [5, 8, 7, 5, 6, 4, 4]
console.log( ages )
// console.log( ages[0] )  // index 0 är första platsen i listan
// console.log( ages[5] )  
console.log( `Listan har ${ages.length} element` )
for( let i=0; i<ages.length; i++ ) {
	console.log('-> ' + ages[i])
}

// let copy = [ ...ages ]
// console.log(copy)

let sum = 0
for( let i=0; i<ages.length; i++ ){
	sum += ages[i]
}
console.log('Summan är: ' + sum)

let children = [
	{ name: 'Nisse', age: 5 },
	{ name: 'Rebecka', age: 7 },
	{ name: 'Caesar', age: 6 }
]
