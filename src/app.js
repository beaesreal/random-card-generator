/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

window.onclick = function() {
  document
    .querySelector("#generateRandomCard")
    .addEventListener("click", () => {
      document.querySelector(".card").classList.add(generateRandomSuit());
      document.querySelector(".number").innerHTML = generateRandomNumber();
    });

  document.querySelector("#timer").addEventListener("click", () => {
    setInterval(() => {
      document.querySelector(".card").classList.add(generateRandomSuit());
      document.querySelector(".number").innerHTML = generateRandomNumber();
    }, 1000);
    false;
  });
};

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
  let indexSuit = Math.floor(Math.random() * 4);

  return suit[indexSuit];
};

/*var btn = document.getElementById("generateRandomCard");
btn.addEventListener("click", generateRandomNumber);

/*var btn = document.querySelector("#generateRandomCard");
btn.addEventListener("click", generateRandomNumber);
btn.addEventListener("click", generateRandomSuit);

setTimeout(() => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".number").innerHTML = generateRandomNumber();
}, 1000); // 1 second

let btn = document.getElementById("generateRandomCard");
btn.addEventListener("click", generateRandomSuit);
btn.addEventListener("click", generateRandomNumber);
*/
