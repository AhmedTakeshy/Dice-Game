var player1Img = document.querySelector('.img1')
var player2Img = document.querySelector('.img2')
var h1 = document.querySelector('h1')
var randomNum1 = Math.floor(Math.random() * 6) +1
var randomNum2 = Math.floor(Math.random() * 6) + 1

player1Img.setAttribute('src', `images/dice${randomNum1}.png`)
player2Img.setAttribute('src', `images/dice${randomNum2}.png`)


if (randomNum1 > randomNum2) {
    h1.innerHTML = "🚩 Play 1 Wins!"
} else if (randomNum1 < randomNum2) {
    h1.innerHTML = "Player 2 Wins! 🚩"
} else {
    h1.innerHTML = "Draw!"
}


