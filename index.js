var player1Img = document.querySelector('.img1')
var player2Img = document.querySelector('.img2')
var h1 = document.querySelector('h1')


var randomNum1 = Math.round(Math.random() * 6)
if (randomNum1 === 0)
{ randomNum1 += 1 };

var randomNum2 = Math.round(Math.random() * 6)
if (randomNum2 === 0)
{ randomNum2 += 1 };



if (randomNum1 > randomNum2) {
    h1.innerHTML = "Player 1 Win!"
} else if (randomNum1 < randomNum2) {
    h1.innerHTML = "Player 2 Win!"
} else {
    h1.innerHTML = "Draw"
}


player1Img.setAttribute('src', `images/dice${randomNum1}.png`)
player2Img.setAttribute('src', `images/dice${randomNum2}.png`)