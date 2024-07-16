/* eslint-disable */
import "bootstrap";
import "./style.css";
//array for suits & numbers
const suits = [
  ["♦", "diamonds"],
  ["♥", "hearts"],
  ["♠", "spades"],
  ["♣", "clubs"]
];
// array for cardNumbers
const cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

function generateRandomCard() {
  //Try to generate variables in one place
  const cardNumberIndex = Math.floor(Math.random() * cardNumber.length);
  const randomCardNumber = cardNumber[cardNumberIndex];
  const suitIndex = Math.floor(Math.random() * suits.length);
  const randomSuit = suits[suitIndex][0];
  const suitClassName = suits[suitIndex][1];

  // card top left
  const topLeftSuitDivElement = document.querySelector(".top-Left-Suit");
  if (!topLeftSuitDivElement) {
    console.log("No top left suit element found");
    return;
  }
  topLeftSuitDivElement.innerText = randomSuit;
  topLeftSuitDivElement.classList.add(suitClassName);

  // card middle

  const cardMiddleDivElement = document.querySelector(".card-middle");
  if (!cardMiddleDivElement) {
    console.log("No middle element found");
    return;
  }
  cardMiddleDivElement.innerText = randomCardNumber;
  cardMiddleDivElement.classList.add(suitClassName);

  // card bottom right

  const bottomRightSuitDivElement = document.querySelector(
    ".bottom-right-suit"
  );
  if (!bottomRightSuitDivElement) {
    console.log("No bottom right suit element found");
    return;
  }
  bottomRightSuitDivElement.innerText = randomSuit;
  bottomRightSuitDivElement.classList.add(suitClassName);
}
window.onload = function() {
  generateRandomCard();
  setInterval(generateRandomCard, 8000);
};
