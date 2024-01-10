let firstCard = 11
let secondCard = 10
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function startGame() {
    cards = [firstCard,secondCard] 
    sum = firstCard + secondCard
    renderGame()
    console.log(cards.length)
}

function renderGame() {

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
    cardEl.textContent = "Cards:  "
    for (let i=0;i<cards.length;i+=1){
        cardEl.textContent += cards[i] + " , "
    }
    sumEl.textContent = "Sum:" + " " + sum
    
}

function newCard() {
    
    let thirdCard = 3
    sum += thirdCard
    cards.push(thirdCard)
    console.log(cards)
    renderGame() 
}

function resetGame() {
    cardEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    sum = cards[0] + cards[1]
    for (let i=0; i<=cards.length+1; i+=1){
        cards.pop(cards[i])
    }
}