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
  var submitFNNumButton = document.createElement("button");
  submitFNNumButton.setAttribute("class", "first-name-form");
  submitFNNumButton.setAttribute("id", "fn-num-submit");
  submitFNNumButton.innerText = "Submit";
  containerInstructions.appendChild(submitFNNumButton);
}

// Event listener for first name num button click
document.getElementById("fn-num-submit").addEventListener("click", function () {
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

  // Create preview label
  var previewLabel = document.createElement("label");
  previewLabel.setAttribute("id", "preview-label");
  previewLabel.innerText = "Name Preview: ";
  containerInstructions.appendChild(previewLabel);

  // Span that will display name preview
  var nameSpan = document.createElement("span");
  nameSpan.setAttribute('id', 'name-span');
  previewLabel.appendChild(nameSpan);

  // Submit button for first name
  var submitFNButton = document.createElement("button");
  submitFNButton.setAttribute("class", "first-name-form");
  submitFNButton.setAttribute("id", "fn-submit");
  submitFNButton.innerText = "Submit";
  containerInstructions.appendChild(submitFNButton);

  // Creating container div for sliders
  var sliderDiv = document.createElement('div');
  sliderDiv.setAttribute('id', 'slider-div');
  containerInput.appendChild(sliderDiv);

  // Generate X number of slider & label elements
  for (let i = 0; i < input; i++) {
    // Slider element
    var newSlider = document.createElement("input");
    newSlider.setAttribute("type", "range");
    newSlider.setAttribute("min", "0");
    newSlider.setAttribute("max", "51");
    newSlider.setAttribute("value", "0");
    newSlider.setAttribute("class", "slider");
    newSlider.setAttribute("id", `range-${i}`);

    // Label element for each slider
    var newLabel = document.createElement("label");
    newLabel.setAttribute("class", "slider-label");
    newLabel.setAttribute("id", `slider-label-${i}`);

    // Add new sliders to page
    sliderDiv.appendChild(newSlider);
    sliderDiv.appendChild(newLabel);

    // On slider input, update corresponding label
    newSlider.oninput = function () {
      updateSliderLabel(this);
      updatePreviewSpan(this);
    };
  }

  // Event listener for first name button click
  document.getElementById("fn-submit").addEventListener("click", function () {
    var inputElement = document.getElementById("name-span");

    createLastNameForm(inputElement.innerText);
  });

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

// Update preview name with each slider input
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

// Create form for last name input - Hold onto your butts
function createLastNameForm(first) {

  // Clean up div that will be used to generate the sliders in
  removeElementsByID("hostile-form-input");
  removeElementsByID("hostile-form-instructions");

  var containerInstructions = document.getElementById("hostile-form-instructions");
  var containerInput = document.getElementById("hostile-form-input");

  // Set instructions
  var question = document.createElement("h3");
  question.innerText = `${first}, please write your last name with your mouse`;
  containerInstructions.prepend(question);

  // Submit button for first name
  var submitLNButton = document.createElement("button");
  submitLNButton.setAttribute("class", "first-name-form");
  submitLNButton.setAttribute("id", "fn-submit");
  submitLNButton.innerText = "Submit";
  containerInstructions.appendChild(submitLNButton);

  // create canvas element and append it to document body
  var canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'last-name-canvas');
  containerInput.append(canvas);

  // get canvas 2D context and set him correct size
  var ctx = canvas.getContext('2d');
  resize();

  // last known position
  var pos = { x: 0, y: 0 };

  window.addEventListener('resize', resize);
  document.addEventListener('mousemove', draw);
  document.addEventListener('mousedown', setPosition);
  document.addEventListener('mouseenter', setPosition);

  // Gets canvas offset from top and left of window so to set drawing position the same as mouse position
  var offsetTop = document.getElementById('last-name-canvas').offsetTop;
  var offsetLeft = document.getElementById('last-name-canvas').offsetLeft;

  // new position from mouse event
  function setPosition(e) {
    pos.x = e.clientX - offsetLeft;
    pos.y = e.clientY - offsetTop;
  }

  // resize canvas
  function resize() {
    ctx.canvas.width = window.innerWidth / 1.5;
    ctx.canvas.height = window.innerHeight / 2;
  }

  function draw(e) {
    // mouse left button must be pressed
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#16264c';

    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!
  }

}

