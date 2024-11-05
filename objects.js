let empty = {}

let teacher1 = {
	name: 'David',  // egenskap/property
	occupation: 'IT-lärare',
	studentCount: 18,
	// city kommer läggas till
}
teacher1.city = 'Göteborg'

let school = {
	teacher: teacher1
}


let product1 = {
	name: 'hammer',
	price: 3000
}
// Kopiera objekt med tre punkter ...
let product2 = { ...product1 }
product1.price += 300

console.log('Produkt 1: ', product1)
console.log('Produkt 2: ', product2)
