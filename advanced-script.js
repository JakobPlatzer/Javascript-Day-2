// advanced exercise 1

var sentence = "i am a web developer";

const capitalizedSentence = (function() {
    let firstLetter = sentence.charAt(0);
    return console.log(firstLetter.toUpperCase() + sentence.slice(1));
}())


// advanced exercise 2

function calculateGrades(Math, Physics, English) {
    let sum = Math+Physics+English;
    let average = (Math+Physics+English)/3;
    return console.log(`The sum of your grades is : ${sum}. \nThe average of your grades is: ${average}.`)
}

calculateGrades(3,4,5);