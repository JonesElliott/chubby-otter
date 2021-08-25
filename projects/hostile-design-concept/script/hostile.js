// Hostile User design concept

var capLetters = [
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
];
var lowLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

createFirstNameForm();

// Generates form to ask for user's first name
function createFirstNameForm() {
  // Set first name question
  var container = document.getElementById("hostile-form-div");
  var question = document.createElement("h3");
  question.innerText = "How many letters are in your first name?";
  container.prepend(question);

  // Create input box
  var inputBox = document.createElement("input");
  inputBox.setAttribute("class", "first-name-form");
  inputBox.setAttribute("id", "fn-input");
  container.appendChild(inputBox);

  // create button
  var submitButton = document.createElement("button");
  submitButton.setAttribute("class", "first-name-form");
  submitButton.setAttribute("id", "fn-submit");
  submitButton.innerText = "Submit";
  container.appendChild(submitButton);
}

// Event listener for first name button click
document.getElementById("fn-submit").addEventListener("click", function () {
  var inputElement = document.getElementById("fn-input");

  // LOGGING TO REMVOE
  console.log(`You have ${inputElement.value} letters in your first name`);

  // Check if value is a number before proceeding
  if (!isNaN(inputElement.value)) {
    generateSliders(inputElement.value);
  }
});

// Remove all children of an element
function removeElementsByID(elementID) {
  var element = document.getElementById(elementID);
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

// Placeholder logic
function generateSliders(input) {
  // LOGGING TO REMVOE
  console.log(input);

  // Clean up div that will be used to generate the sliders in
  removeElementsByID("hostile-form-div");

  // Set instructions
  var container = document.getElementById("hostile-form-div");
  var question = document.createElement("h3");
  question.innerText = "Please enter your name below";
  container.prepend(question);

  var previewLabel = document.createElement("label");
  previewLabel.setAttribute("id", "preview-label");
  previewLabel.innerText = "Name Preview: ";
  container.appendChild(previewLabel);

  var nameSpan = document.createElement("span");
  nameSpan.setAttribute("id", "name-span");
  previewLabel.appendChild(nameSpan);

  // Generate X number of slider & label elements
  for (let i = 0; i < input; i++) {
    var newSlider = document.createElement("input");
    newSlider.setAttribute("type", "range");
    newSlider.setAttribute("min", "0");
    newSlider.setAttribute("max", "25");
    newSlider.setAttribute("value", "0");
    newSlider.setAttribute("class", "slider");
    newSlider.setAttribute("id", `range-${i}`);

    var newLabel = document.createElement("label");
    newLabel.setAttribute("class", "slider-label");
    newLabel.setAttribute("id", `slider-label-${i}`);

    container.appendChild(newSlider);
    container.appendChild(newLabel);

    // On slider input, update corresponding label
    newSlider.oninput = function () {
      updateSliderLabel(this);
      updatePreviewSpan(this);
    };
  }
}

// Update label dynamically to reflect slider value
function updateSliderLabel(element) {
  // Get slider element ID No.
  var sliderIDNo = element.id.split("range-").pop();
  // Get related label element based on slider ID No.
  var label = document.getElementById(`slider-label-${sliderIDNo}`);
  // Get letter
  var letter = lowLetters[element.value];
  // Update label based on slider value
  label.innerText = letter;
}

function updatePreviewSpan(element) {
  var preview = document.getElementById("name-span");

  var letterLabels = document.getElementsByClassName('slider-label');

  console.log(letterLabels);
  console.log(letterLabels[0]);
  console.log(letterLabels[1]);

  var name = "Place_Holder";

  preview.innerText = name;

  return console.log(`Name: ${name}`);

}
