// advanced exercise 1

var sentence = "i am a web developer";

const capitalizedSentence = (function() {
    let firstLetter = sentence.charAt(0);
    return console.log(firstLetter.toUpperCase() + sentence.slice(1));
}())
