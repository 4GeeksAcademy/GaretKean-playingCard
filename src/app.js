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

window.onload = function() {
  const cardNumberIndex = Math.floor(Math.random() * cardNumber.length);
  const randomCardNumber = cardNumber[cardNumberIndex];
  const suitIndex = Math.floor(Math.random() * suits.length);
  const randomSuit = suits[suitIndex];

  // card top left
  const topLeftSuitDivElement = document.querySelector(".top-Left-Suit");
  if (!topLeftSuitDivElement) {
    console.log("No top left suit element found");
    return;
  }
  const randomSuitIcon = randomSuit[0];
  const randomSuitClassName = randomSuit[1];
  topLeftSuitDivElement.innerText = randomSuit;
  topLeftSuitDivElement.classList.add(randomSuitClassName);

  // Card Middle
  const cardMiddleDivElement = document.querySelector(".card-middle");
  if (!topLeftSuitDivElement) {
    console.log("No middle element found");
    return;
  }
};
