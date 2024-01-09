let firstCard = 11
let secondCard = 10
let hasBlackJack = false
let isAlive = true
let message = ""

sum = firstCard + secondCard
console.log(sum)

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function startGame() {
    if (sum < 21) {
    message = "Try again"
    console.log("Try again")
    }
    else if (sum === 21) {
    message = "Blackjack"
    console.log("Blackjack")
    hasBlackJack = true
    }
    else {
    message = "You Lost !"
    console.log("You lost")
    isAlive = false
        }
    messageEl.textContent = message
    cardEl.textContent = "Card:" + " "+ firstCard + " " + "," + " " + secondCard
    sumEl.textContent = "Sum:" + " " + sum
}

