var letters = [
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

var snu = document.getElementById("captcha-text");


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
  var countLeft = 3;

  var setCountTimer = setInterval(function () {
    countLeft--;

    if (countLeft === 0) {
      clearInterval(setCountTimer);
      countDown();
    }
  }, 1000);
}

function captchaValidation() {

}

snu.innerText = CaptchaJumble(5);
