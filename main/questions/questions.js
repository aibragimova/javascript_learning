// 1. Define a variable called name and set it equal to a string that contains your name. Then, demonstrate how you would change its value to your full name.
let name = 'aliia'

name = 'aliia ibargimova'
// 2. How would you compare two variables, a and b, to check equality?
let  a = 5;
let b = 7;

console.log(a === b)
// 3. Write an if...else statement in JavaScript that checks if a number stored in a variable age is greater than 18. If true, it should log "Adult" to the console; otherwise, it should log "Minor".
let age = 39
if (age > 18){
console.log('Adult')
} else {
    // console.log('Minor')
}

// 4. Create a for loop that iterates from 0 to 10, but only prints even numbers to the console.

let numToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arrayLenght = numToTen.length

for (let i = 0; i < arrayLenght; i++){
    let curretNum = numToTen[i]
    let isEven = curretNum % 2 ===0
    if (isEven){
        // console.log(curretNum)
    }
}

// 5. Given an array numbers, write a while loop that continues to sum the numbers until the sum is greater than 100, then exits the loop.
let arrayNum = [0, 17, 2, 37, 43, 52, 68, 987, 84, 90, 10]

let sum = 0
let j = 0

while(sum < 100){
    let newCurValue = arrayNum[j]
    sum = sum +newCurValue

    j++
}
console.log(sum)


// 6. Define a function named calculateArea that takes two parameters, width and height, and returns the area of a rectangle. // width * height
function calculateArea (width,height){
    return (width * height)
}

let area_one = calculateArea(9,19)
let area_two = calculateArea(1,3)
let area_three = calculateArea(2,44)


console.log('The calculated area:', area_one)
console.log('The calculated area:', area_two)
console.log('The calculated area:', area_three)
