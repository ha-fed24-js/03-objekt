function amazing(first, second) {
    let max = 0
    if( first < second ) {
        max = second
    } else {
        max = first
    }
    return max
}

console.log( amazing(5, 15) )
console.log( amazing(3, 3) )
console.log( amazing(-20, -40) )
