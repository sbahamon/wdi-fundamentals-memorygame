console.log("Up and Running!");

//initialize cards
var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flippled " + cardsInPlay);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flippled " + cardsInPlay[1]);

if (cardsInPlay.length === 2){
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You Found A Match!");
  } else{
    alert("Sorry, Try Again.");
  }
}

console.log(cardsInPlay)
