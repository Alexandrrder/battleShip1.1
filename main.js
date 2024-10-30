// ship position
const randomLoc = Math.floor(Math.random() * 5) // between 0 and 4
const location1 = randomLoc;
const location2 = location1 + 1;
const location3 = location2 + 1;
//sunk or nots
let isSunk = false;
// try position (fire)
let guess;
// hit counter
let hits = 0;
//fire counter
let guesses = 0;
while (isSunk === false) {
    guess = +prompt("Fire, Enter a number 0-6")
    if (guess < 0 || guess > 6) {
        alert('Please enter a valid sell number')
    } else { 
        // increase fire counter
        guesses = guesses + 1;
        // logical 'if'
        if(guess === location1 || guess === location2 || guess === location3) {
            alert("HIT!")   
            // count hits
            hits = hits + 1
            // if sunk
            if(hits === 3) {
            isSunk = true;
            alert("You sunk my battleship!s")
            }
        } else {
            alert("Miss!")
        }
    }
}
const stats = "You have " + hits + " hits out of " + guesses + " shots";
alert(stats)