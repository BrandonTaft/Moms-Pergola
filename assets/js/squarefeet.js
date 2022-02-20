

 function sqFeet(width, length){
    const squareFeet = width * length;
    squarefeet.textContent = "Your Patio Is: " + squareFeet + " Square Feet";
    }
    
      
      const form = document.getElementById('form');
      const squareFeet = document.getElementById('squarefeet');
      const length = document.getElementById('length');
      const width = document.getElementById('width');
      form.addEventListener('submit', event => {
  // submit event detected
  event.preventDefault()
  sqFeet(width.value, length.value)
})

function cubed(width2, length2){
    const cube = width2 * length2 * .084;
    cubic.textContent = "You Need " + cube +" cubic feet Of Sand";
    }
    
      
      const form2 = document.getElementById('form2');
      const cubic = document.getElementById('cubic');
      const length2 = document.getElementById('length2');
      const width2 = document.getElementById('width2');
      form2.addEventListener('submit', event => {
  // submit event detected
  event.preventDefault()
  cubed(width2.value, length2.value)
})

function getSand(cubicFeet){
  const result = (cubicFeet/ .5).toFixed(2);
  const total = (result * 4.68).toFixed(2)
  sand.textContent = "You Need " + result +" Bags Of Sand! They Are $4.68 At Lowes, So It Would Be Around $" + total;
  }
  
    
    const form3 = document.getElementById('form3');
    const cubicFeet = document.getElementById('cubic-feet');
    const sand = document.getElementById('sand')
    form3.addEventListener('submit', event => {
// submit event detected
event.preventDefault()
getSand(cubicFeet.value)
})
