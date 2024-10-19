// Get the display element
let display = document.getElementById('display');

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to append characters to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
