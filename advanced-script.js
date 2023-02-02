// advanced exercise

function minutesConverter(minutes) {
    let hours = Math.floor(minutes/60);
    let minutesRemain = minutes-(hours*60);
    return console.log(`${minutes} minutes = ${hours} hours and ${minutesRemain} minutes`);
}

minutesConverter(200)
minutesConverter(560)
minutesConverter(73)
minutesConverter(20)
minutesConverter(37)
minutesConverter(8605)

// challenge


