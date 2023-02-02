// basic exercise 1

let temp = Math.floor(Math.random()*31)-5;

console.log(temp)

if (temp < 10) {
    console.log("The weather is cold.")
} else {
    console.log("The weather is moderate.")
}

// basic exercise 2

let favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"]

function randomFood() {
    return console.log(favoriteFoods[Math.floor(Math.random()*4)])
}

randomFood();

// basic exercise 3

function crystalGazer(number, where, who, what) {
    return console.log(`You will be a ${what} in ${where} and married to ${who} with ${number} children.`)
}

crystalGazer(3, "Rome", "Lorenzo", "pizzabaker")

// basic exercise 4

// function ageCalculator(yearOfBirth, currentYear) {
//     let age1 = currentYear - yearOfBirth;
//     let age2 = currentYear - yearOfBirth - 1;
//     return console.log(`You are either ${age1} or ${age2}`)
// }

// ageCalculator(1990,2023)

// basic exercise 5

function ageCalculatorImproved(yearOfBirth) {
    let currentYear = new Date().getFullYear();
    let age1 = currentYear - yearOfBirth;
    let age2 = currentYear - yearOfBirth - 1;
    return console.log(`You are either ${age1} or ${age2}`)
}

ageCalculatorImproved(1990)

// basic exercise 6

function degreesToRadians(degrees) {
    let radians = degrees*(Math.PI/180);
    return console.log(radians);
}

degreesToRadians(90)

// basic exercise 7

function calculateBox (width, height, depth) {
    let area = width*height;
    let volume = width*height*depth;
    return console.log(`The area of the box is: ${area}. \nThe volume of the box is: ${volume}.`)
}

calculateBox(7,2,5)

