
  function appendToDisplay(value) {
  document.getElementById("Display").value += value;
}

function clearDisplay() {
document.getElementById("Display").value = "";
}

 function calculate() {
  try {
    let result = eval(document.getElementById("Display").value);
    document.getElementById("Display").value = result;
  } catch {
    document.getElementById("Display").value = "Error";
  }
}
  function backspace() {
  const displayElement = document.getElementById("Display");

  // If the display shows "Error", clear it entirely
  if (displayElement.value === "Error") {
    displayElement.value = "";
    return;
  }

  // Otherwise, remove the last character
  displayElement.value = displayElement.value.slice(0, -1);
}

 let Display = document.getElementById("Display").value;
 let result = document.getElementById("result")

function x() {

if(Display += result){
  backspace()
}else{
  clearDisplay
}
  
}

