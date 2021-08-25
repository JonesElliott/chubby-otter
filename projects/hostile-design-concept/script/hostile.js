// Hostile User design concept

createFirstNameForm();

// Generates form to ask for user's first name
function createFirstNameForm() {
  // Set first name question
  var container = document.getElementById("hostile-register-div");
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
  console.log(`You have ${inputElement.value} letters in your first name`);
  generateSliders(inputElement.value);
});

// Placeholder logic
function generateSliders(element) {
  var inputValue = element.value;
  if (Number.isNaN(inputValue)) {
    return;
  }
  console.log(element);
  console.log(`Hello!`);
}