const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

//function to check if there is a flipped card
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click

  secondCard = this;
  //calling function CheckForMatch 
  checkForMatch();
}

//function CheckForMatch compares the two flipped cards  are identical to one  another and returns functions based on expression results 
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}
//this function resets the Game cards back to its initial default state 
function disableCards() {
  alert("Good Job now match more cards");
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}
//function to flip cards back if they don't match after after five secconds
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
    resetBoard();
  }, 500);
  alert("Oooops, sorry please Try again!!!");   
}

//game board reset function:it resets every thing, all the cards to Initial defult state
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
//function to shuffle randomly the cards to be matched in the game and populates them to the board
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 11);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
