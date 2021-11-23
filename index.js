// alert("Working")


//Player 1 Dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImageSource = "images/dice" + randomNumber1 + ".png"

let image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSource);


//Player 2 Dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//Winner condition
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "DRAW!"
}