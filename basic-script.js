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