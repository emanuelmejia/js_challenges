window.onload = function () {
  let cardValues = [
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
    "K",
    "A",
  ];
  let suits = ["♥", "♦", "♣", "♠"];

  let ranValue = Math.floor(Math.random() * cardValues.length);
  let ranSuit = Math.floor(Math.random() * suits.length);

  let selectedValue = cardValues[ranValue];
  let selectedSuit = suits[ranSuit];

  let valueElem = document.querySelector("#generatedValue");
  let suitElem = document.querySelectorAll(".suitImg");

  valueElem.innerHTML = selectedValue;
  suitElem.innerHTML = selectedSuit;
  suitElem.forEach((e) => {
    e.innerHTML = selectedSuit;
  });

  if (selectedSuit == "♣" || selectedSuit == "♠") {
    valueElem.style.color = "black";
    suitElem.forEach((e) => (e.style.color = "black"));
  } else {
    valueElem.style.color = "red";
    suitElem.forEach((e) => (e.style.color = "red"));
  }
};

// Set the interval to reload the entire page every 7 seconds
let secondsLeft = 7;

function refreshPage() {
  location.reload();
}
setInterval(refreshPage, secondsLeft*1000);

// Use those same seconds to reload a display
function updateDisplay() {
  let timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = secondsLeft;
}

function timerTick() {
  secondsLeft--;
  if (secondsLeft < 0) {
    secondsLeft = 10; // Reset timer
  }
  updateDisplay();
}

// Display initial value
updateDisplay();
// Run tick every 1 second to count down
setInterval(timerTick, 1000);
