// ship position
const location1 = 3;
const location2 = 4;
const location3 = 5;

//sunk or nots
let isSunk = false;

// try position (fire)
let guess;

// hit counter
let hits = 0;

while (isSunk === false) {
    guess = +prompt("Fire, Enter a number 0-6")
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