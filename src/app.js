/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

let suit = ["diamond", "spade", "heart", "club"];

window.getCard = function getCard() {
  let card = document.querySelector(".card");
  for (let i = 0; i < suit.length; i++) {
    if (card.classList.contains(suit[i])) {
      card.classList.remove(suit[i]);
    }
  }
  card.classList.add(generateRandomSuit(suit));
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

document.querySelector("#timer").addEventListener("click", () => {
  if (myInterval == -1) {
    myInterval = setInterval(() => {
      getCard();
    }, 2000);
    timer.innerHTML =
      '<span style="color:#0A95FF"> Stop generating a card every two seconds ⏸️ </span>';
  } else {
    timer.innerHTML = "▶️ Generate a new card every two seconds";
    clearInterval(myInterval);
    myInterval = -1;
  }
});

let myInterval = -1;

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
