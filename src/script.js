//Need to use Rejex so numbers only can be used
//This is for the bill before the tip, I will use This
//to help figure out the total bill with the tip
const renderBill = () => {
  let bill = document.getElementById('reneredBill').value;
  document.getElementById('enteredBill').innerHTML = bill;
}

const button = document.getElementById('saveAmount');
button.addEventListener('click', renderBill);

//use a switch to figure out the tip% attached to an experience
const tipCal = (changeEventHandler) => {
  let percentage;
  switch(changeEventHandler) {
    case "EXCELLENT":
      return tip = 11/50;
    case "GREAT":
     return tip = 1/5;
      break;
    case "GOOD":
      return tip = 9/50;
      break;
    case "EH":
     return tip = 1/10;
  }
}

console.log('1', tipCal);

const myExperience = document.getElementById("form");

myExperience.addEventListener("change", tipCal);




// Thought 1  With this I do get somethign to render to the screen
// just not the tip %
const changeEventHandler = (percentage, tipCal) => {
  if(!event.target.value) return ('please selct an experience');
 else (document.getElementById("percentage").innerHTML = percentage)
 alert('It looks like you had ' + event.target.value + ' experience');
 console.log('2', event);
 console.log('3', tipCal);
}
