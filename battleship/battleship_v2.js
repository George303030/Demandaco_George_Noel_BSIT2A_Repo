//declaimer variables
var randomLoc = Math.floor(math.random() * 5);

var location = ;
var location = + 1;
var location = + 2;

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

// game logic
while (isSunk == false) {
    guess = prompt("Ready. Aim. Fire!");

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
var accuracy = (guesses > 0 ? (hits / guesses) *100 : 0).toFixed(2);
var stats = "You sunk my battleship at: " + guesses + " guesses" + "and your accuracy is: " + (3/guesses);

alert(stats);