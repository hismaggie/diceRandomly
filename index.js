var randomNumber1 = Math.floor(Math.random() * 6) + 1; // randomNumber 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // randomDiceImage 1-6

var randomImageSource = "images/" + randomDiceImage; //images/dice6.png -> images/dice1.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var heading = document.querySelector("h1"); //select h1

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Wins!"; //if p1 wins
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins!"; //if p2 wins
} else {
    heading.innerHTML = "It's a Draw!"; // if a draw
}
