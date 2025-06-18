// referencing our display element
const display = document.getElementById('display');

// track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(Value) {
  console.log('button pressed:', Value);

  alert('You pressed:' + Value);
  
}

function clearDisplay() {
  console.log('clear button pressed.')
  
  alert('Clear button was clicked');
  
}

function deletelast() {
    console.log('Backspace button clicked')
  
  alert('Backspace button clicked');
  
}

function Calculate() {
  console.log('Equals button clicked')
  
  alert('Equals button clicked');
  
}

document.addEventListener('DOMContentloaded', function () {
  console.log('Calculator loaded successfully');
   console.log('Display elem', display);

   if (display) {
    console.log('Current display value:' display.value);
   } else{
    console.log('Display element not found');
   }
    
   }
  
)