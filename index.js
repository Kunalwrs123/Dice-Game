var scorePlayer_1 = Math.floor(Math.random()*6 + 1);
var randomDice1 = "images/dice" + scorePlayer_1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDice1);


var scorePlayer_2 = Math.floor(Math.random()*6 + 1);
var randomDice2 = "images/dice" + scorePlayer_2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDice2);



if (scorePlayer_1 > scorePlayer_2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    
} else if (scorePlayer_1 < scorePlayer_2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}  else {
    document.querySelector("h1").innerHTML = "Draw!";
}

