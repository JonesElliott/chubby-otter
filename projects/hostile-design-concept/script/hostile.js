// Hostile User design concept

var letters = [
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

createFirstNameForm();

// Generates form to ask for user's first name
function createFirstNameForm() {
  // Set first name question
  var containerInstructions = document.getElementById("hostile-form-instructions");
  var question = document.createElement("h3");
  question.innerText = "How many letters are in your first name?";
  containerInstructions.prepend(question);

  // Create input box
  var inputBox = document.createElement("input");
  inputBox.setAttribute("class", "first-name-form");
  inputBox.setAttribute("id", "fn-input");
  containerInstructions.appendChild(inputBox);

  // create button
  var submitButton = document.createElement("button");
  submitButton.setAttribute("class", "first-name-form");
  submitButton.setAttribute("id", "fn-submit");
  submitButton.innerText = "Submit";
  containerInstructions.appendChild(submitButton);
}

// Event listener for first name button click
document.getElementById("fn-submit").addEventListener("click", function () {
  var inputElement = document.getElementById("fn-input");

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

  // Clean up div that will be used to generate the sliders in
  removeElementsByID("hostile-form-input");
  removeElementsByID("hostile-form-instructions");

  // Set instructions
  var containerInstructions = document.getElementById("hostile-form-instructions");
  var containerInput = document.getElementById("hostile-form-input");
  var question = document.createElement("h3");
  question.innerText = "Please enter your name using the sliders below";
  containerInstructions.prepend(question);

  var previewLabel = document.createElement("label");
  previewLabel.setAttribute("id", "preview-label");
  previewLabel.innerText = "Name Preview: ";
  containerInstructions.appendChild(previewLabel);

  var nameSpan = document.createElement("span");
  nameSpan.setAttribute('id', 'name-span');
  previewLabel.appendChild(nameSpan);

  var sliderDiv = document.createElement('div');
  sliderDiv.setAttribute('id', 'slider-div');
  containerInput.appendChild(sliderDiv);

  // Generate X number of slider & label elements
  for (let i = 0; i < input; i++) {
    var newSlider = document.createElement("input");
    newSlider.setAttribute("type", "range");
    newSlider.setAttribute("min", "0");
    newSlider.setAttribute("max", "51");
    newSlider.setAttribute("value", "0");
    newSlider.setAttribute("class", "slider");
    newSlider.setAttribute("id", `range-${i}`);

    var newLabel = document.createElement("label");
    newLabel.setAttribute("class", "slider-label");
    newLabel.setAttribute("id", `slider-label-${i}`);

    sliderDiv.appendChild(newSlider);
    sliderDiv.appendChild(newLabel);

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
  var letter = letters[element.value];
  // Update label based on slider value
  label.innerText = letter;
}

function updatePreviewSpan(element) {
  var preview = document.getElementById("name-span");
  var letterLabels = document.getElementsByClassName('slider-label');
  var name = "";

  for (let i = 0; i < letterLabels.length; i++) {
    let letter = letterLabels[i].innerText;
    name = name + letter;
  }

  preview.innerText = name;
}
