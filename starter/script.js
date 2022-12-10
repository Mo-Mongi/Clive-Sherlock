'use strict';

// Selecting Elements

const score0El = document.querySelector('#score--0')
const current0El = document.querySelector('#current--0')
const player0El = document.querySelector('.player--0')

const score1El = document.querySelector('#score--1')
const current1El = document.querySelector('#current--1')
const player1El = document.querySelector('.player--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

let current = 0;

const addScore = (currentPlayer, increasedBy)=>{
    current += increasedBy;
    currentPlayer.textContent = current;
}
const resetScore = (currentPlayer)=>{
    current = 0;
    currentPlayer.textContent = current;
}

// Dice Roll Functionality
btnRoll.addEventListener('click',()=>{
    // 1- generate random number
    const diceNo = Math.ceil(Math.random() * 6)
    // 2- display dice
    diceEl.classList.remove('hidden')
    diceEl.setAttribute('src', `dice-${diceNo}.png`)
    console.log(diceNo);
    // 3- check if dice is 1

    if(diceNo !== 1){
        addScore(current0El, diceNo)
    } else{
        // Switch to next player


        // 1- I nedd to remove active class from first player

        // 2- I nedd to reset prev player's currnt to zero

        // 3- I need to add active class to second player

        // 4- I need to start counting for the second player
    }
})