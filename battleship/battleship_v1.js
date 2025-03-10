var location = 3;
var location = 4;
var location = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// game logic

while (isSunk == false) {
    guess = prompt("Ready, Aim, Fire!( Enter number 0-6)");

if (guess < 0 || guess > 6) {
    alert("Please enter a cell number!")
} else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3){
        hits = hits + 1;
        alert("Hi!")

        if (hits == 3) {
            isSunk = true;
            alert("You sunk my battleship!🤪")
        }
    } else {
        alert("Miss!")
    }
 }

}
var stats = "You sunk my battleship at: " + guesses + " guesses" + "and your accuracy is: " + (3/guesses);

alert(stats);





