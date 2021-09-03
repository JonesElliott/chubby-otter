const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

let snu = document.getElementById("captcha-text");
let captchaInput = document.getElementById("fn-captcha-input");
let captchaButton = document.getElementById("fn-captcha-button");
let captchaForm = document.getElementById("captcha-form");
let captchaBox = document.getElementById("captcha-box");

let valid = false;

// Remove all children of an element
function removeElementsByID(elementID) {
  var element = document.getElementById(elementID);
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

// Sudo random number generator
function ranNum(max) {
  return Math.floor(Math.random() * max);
}

// Picks a random string from an array depending on argument length, creates a new string, and returns that string
function CaptchaJumble(length) {
  var captchaString = "";
  for (let i = 0; i < length; i++) {
    captchaString = captchaString + letters[ranNum(letters.length)];
  }
  return captchaString;
}

// Three second timer that will invoke the CaptchaJumble as long as valid is false
function CaptchaTimer() {
  snu.innerText = CaptchaJumble(5);
  let countLeft = 3;

  let setCountTimer = setInterval(function () {
    countLeft--;

    if (countLeft === 0) {
      clearInterval(setCountTimer);
      if (!valid) {
        CaptchaTimer();
      }
    }
  }, 1000);
}

// Creates a loading wheel and verify text for 15 seconds and then completes
function ValidationTimer() {
  let countLeft = 15;

  removeElementsByID("captcha-form");

  let verifyText = document.createElement("h3");
  verifyText.setAttribute("id", "verify-text")
  verifyText.innerText = "Verifying..."
  captchaForm.appendChild(verifyText);

  let loaderWheel = document.createElement("div");
  loaderWheel.setAttribute("class", "loader-wheel");
  loaderWheel.setAttribute("id", "loader-wheel");
  captchaForm.appendChild(loaderWheel);

  let setCountTimer = setInterval(function () {
    countLeft--;

    if (countLeft === 0) {
      loaderWheel.remove();
      clearInterval(setCountTimer);
      verifyText.innerText = "You are not a robot!"
      snu.innerText = "VERIFIED";
    }
  }, 1000);
}

// Listens for the submit button or enter key to be pressed and checks if the input value matches the captcha value
document
  .getElementById("fn-captcha-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (!valid) {
      if (captchaInput.value.toLowerCase() == snu.innerText.toLowerCase()) {
        valid = true;
        captchaInput.value = "";
        ValidationTimer();
      } else {
        captchaInput.value = "";
        snu.innerText = CaptchaJumble(5);
      }
    }
  });

CaptchaTimer();
