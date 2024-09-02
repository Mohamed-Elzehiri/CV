// script.js

let randomNum = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let maxGuesses = 10;
let highScore = 0;
let userGuess;

document.getElementById("guess-btn").addEventListener("click", () => {

  userGuess = Number(document.getElementById("guess-input").value);

  if(guessCount < maxGuesses) {

    if(userGuess === randomNum) {
      displayResult(true);
      checkHighScore(guessCount);
    } else {
      displayResult(false);
    }

    guessCount++;
    document.getElementById("guess-count").textContent = guessCount;
    document.getElementById("max-guesses").textContent = maxGuesses - guessCount;

    if(guessCount === maxGuesses) {
      displayGameOver();
    }

  }

});

function displayResult(won) {
  let msg;
  if (won) {
    msg = "مبروك! لقد توقعت الرقم بشكل صحيح";
  } else {
    msg = "خطأ! الرقم الذي قمت بإدخاله أصغر من الرقم الصحيح";
    if (userGuess > randomNum) {
      msg = "خطأ! الرقم الذي قمت بإدخاله أكبر من الرقم الصحيح";
    }
  }
  if (guessCount === maxGuesses && !won) {
    msg = "للأسف انتهت محاولاتك! الرقم الصحيح هو " + randomNum;
  }
  document.getElementById("result").textContent = msg;
}

function checkHighScore(guessCount) {
  if(guessCount < highScore || highScore === 0) {
    highScore = guessCount;
    document.getElementById("high-score").textContent = highScore;
  }
}

function displayGameOver() {
  document.getElementById("game-over").textContent = "لقد نفذت محاولاتك!";
}
