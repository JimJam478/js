let firstCard = 11
let secondCard = 5

sum = firstCard + secondCard

if (sum < 21) {
    console.log("Try again")
}
else if (sum === 21) {
    console.log("Blackjack")
}
else {
    console.log("You lost")
}