/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

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
    //if paused start
    if (myInterval == -1) {
      myInterval = setInterval(() => {
        document.querySelector(".card").classList.add(generateRandomSuit());
        document.querySelector(".number").innerHTML = generateRandomNumber();
      }, 2000);
      timer.innerHTML =
        '<span style="color:#0A95FF"> Stop generating a card every two seconds ⏸️ </span>';
      //else pause
    } else {
      timer.innerHTML = "▶️ Generate a new card every two seconds";
      clearInterval(myInterval);
      myInterval = -1;
    }
  });
};

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
  let indexSuit = Math.floor(Math.random() * 4);

  return suit[indexSuit];
};

/*

------ PRUEBAS ------

var btn = document.getElementById("generateRandomCard");
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

//listen for window resize event
window.addEventListener("resize", function(event) {
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;
});

// Get current width and height (does not change the variables automatically)
let width = window.innerWidth;
let height = window.innerHeight;

// Updates the variables every time the window resizes
window.addEventListener("resize", function(event) {
  width = window.innerWidth;
  height = window.innerHeight;
});


*/
