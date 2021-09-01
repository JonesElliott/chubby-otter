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

let valid = false

function ranNum(max) {
  return Math.floor(Math.random() * max);
}

function CaptchaJumble(length) {
  var captchaString = "";
  for (let i = 0; i < length; i++) {
    captchaString = captchaString + letters[ranNum(letters.length)];
  }
  return captchaString;
}

// Timer that counts down
function countDown() {
  snu.innerText = CaptchaJumble(5);
  let countLeft = 3;

  let setCountTimer = setInterval(function () {
    countLeft--;

    if (countLeft === 0) {
      clearInterval(setCountTimer);
      countDown();
    }
  }, 1000);
}

function captchaValidation() {

}

document.getElementById("fn-captcha-button").addEventListener("click", function (event) {
  const inputText = document.getElementById("fn-captcha-input");

  if (inputText.value.toLowerCase() == snu.innerText.toLowerCase()) {
    console.log("you done did it");
  }
  else{
    inputText.value = "";
    snu.innerText = CaptchaJumble(5);
  }
  event.preventDefault()
});

snu.innerText = CaptchaJumble(5);
