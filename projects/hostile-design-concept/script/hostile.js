// Hostile User design concept

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
        updateSliderLabel(this)
    };
  }
}

// Update label dynamically to reflect slider value
function updateSliderLabel(element) {
    // Get slider element ID No.
    var sliderIDNo = element.id.split('range-').pop();
    // Get related label element based on slider ID No.
    var label = document.getElementById(`slider-label-${sliderIDNo}`);
    // Update label based on slider value
    label.innerText = element.value;
}
