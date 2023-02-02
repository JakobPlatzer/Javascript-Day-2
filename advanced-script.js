function minutesConverter(minutes) {
    let hours = Math.floor(minutes/60);
    let minutesRemain = minutes-(hours*60);
    return console.log(`${minutes} minutes = ${hours} hours and ${minutesRemain} minutes`);
}

minutesConverter(200)