// advanced exercise

function minutesConverter(minutes) {
    let hours = Math.floor(minutes/60);
    let minutesRemain = minutes-(hours*60);
    return console.log(`${minutes} minutes = ${hours} hours and ${minutesRemain} minutes`);
}

minutesConverter(200)


// challenge

// ATM


// function atm(sum) {
//     if (Number.isInteger(sum/10)) {
//         let hundreds = Math.floor(sum/100);
//         let fifties = Math.floor((sum-(hundreds*100))/50);
//         let twenties = Math.floor((sum-(hundreds*100)-(fifties*50))/20)
//         let tens = Math.floor((sum-(hundreds*100)-(fifties*50)-(twenties*20))/10);
//         return console.log(`You will recieve ${hundreds} hundred € bill(s), ${fifties} fifty € bill(s), ${twenties} twenty € bill(s) and ${tens} ten € bill(s).`)
//     } 
//     else { console.log("You cannot retrieve this amount")}
// }

// atm()
