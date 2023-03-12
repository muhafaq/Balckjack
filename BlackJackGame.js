let allCards = []
let sum =  0
let hasBlackJack = false
let isAlive = false
let message = ""
let  messageEl= document.getElementById ("message-el")
let sumEl = document.querySelector ("#sum-el")
let cardEl = document.querySelector ("#card-el")

let player = {
    name: "afaq",
    chips: 200
}

let playerEl = document.querySelector("#score")

playerEl.textContent = player.name + ": $" + player.chips 

function getRandomCard () {

    let randomCard = Math.floor ( Math.random () * 13 ) +1
   
        if (randomCard === 1) {
            return 11
        } 
        
        else if (randomCard > 10) {
            return 10
        }

        else {
            return randomCard
        }

}

function renderGame() {

    if (sum <=20) {

        message = "Do you want to draw a new card? 🙂"
    }
    else if (sum ===21) {
        message = "You've got Blackjack! 🥳"
        hasBlackJack = true
    }
    else { 
        message = "You're out of the game! 😭"
        isAlive = false
    }

    messageEl.textContent= message
    sumEl.textContent = " Sum: " + sum
    // cardEl.textContent = "Cards: " + allCards[0] + " " + allCards[1]
    
    cardEl.textContent = "Cards: "
    
    for (i=0; i<allCards.length; i++) {

        cardEl.textContent +=  allCards [i] + " "
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard ()
    let secondCard = getRandomCard ()
    allCards = [firstCard, secondCard]
    sum =  firstCard + secondCard
    renderGame()
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {

        let card =getRandomCard ()
        sum += card;
        allCards.push(card)
        renderGame()
    }

}
