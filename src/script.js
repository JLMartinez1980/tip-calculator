//Start the app by clicking yes
//I want this button to generate the "Your bill before tip is",
//based upon your dining experience...



//use a switch to figure out the tip% attached to an experience
//don't put eventhandler as an argument, just pass it a value
//make sure to match the value on the html side,
//do not use return "value" = 1/10
 tipCal(value) {
  switch(value) {
    case "excellent":
      return 11/50;
    case "great":
     return 1/5;
      break;
    case "good":
      return 9/50;
      break;
    case "eh":
     return 1/10;
  }
}

//Need to use Rejex so numbers only can be used
//Taking the total bill and multiplying it by a % to receive a total tip
function changeEventHandler({ value }) {
  const tipPercentage = tipCal(value);
  const bill = document.getElementById('reneredBill').value;
  const total = tipPercentage * Number(bill);
  document.getElementById("percentage").innerHTML = `Total: $${total}`;
}
/*
  When pulling information from getElementById make sure if the element
  I am pulling from is innerHTML to use that in place of .value .split will cut
  the information in 1/2 creating an array ' ' creates a space .replace will take
  any value and replace it with a value or a space this is was used to take the
  $ and completly erase it leaving me a number only
 */
function calculateBill() {
  const bill = Number(document.getElementById('reneredBill').value);
  const calculatedTip = document.getElementById("percentage").innerHTML;
  const newTip = Number(calculatedTip.split(' ')[1].replace('$', ''));
  document.getElementById("showTheBill").innerHTML = "This is your total Bill including tip:";
  document.getElementById("showMeTheMoney").innerHTML = `$${bill + newTip}`;

}

//cannot get a value from a button
const button = document.getElementById('leaveTip');
button.addEventListener('click', calculateBill);

//using the "NO" button to generate an input where a customizable tip can be entered
// I am creating an input and a button is this too much for one function?
function customizeTip() {
  const askAboutTip = document.createElement('P')
  askAboutTip.innerHTML = "Would you like to leave a custom tip?";
  document.body.appendChild(askAboutTip);
  const customize = document.createElement("INPUT");
  customize.id = "customizeTip";
  console.log('customize.id', customize.id);
  customize.innerHTML = "Enter numbers here:";
  document.body.appendChild(customize);
  const lastButton = document.createElement("BUTTON");
  lastButton.innerHTML = "ADD";
  console.log('lastButton', lastButton);
  document.body.appendChild(lastButton);
  lastButton.setAttribute("id", "leaveOtherTip");
  console.log('lastButton', lastButton.id);
}
console.log('customizeTip', customizeTip());

//Pulling ID from html, not javaScript
const customizeButton = document.getElementById('notThisONe');
customizeButton.addEventListener('click', customizeTip);
console.log('customizeButton', customizeButton);

// using the generated input id, to receive a value to add that value to the Bill
function calculateFinalButton(customizeTip) {
  console.log('calculateFinalButton', calculateFinalButton);
  const bill = document.getElementById('reneredBill').value;
  const personalTip = document.getElementById('customizeTip').value;
  console.log('personalTip', personalTip);
  const fatTip = Number(bill) + Number(personalTip);
}
console.log(calculateFinalButton())


// the console is saying, cannot read innerHTML of null line 79
const leavePersonalTip = document.getElementById('leaveOtherTip').value;
console.log('leavePersonalTip', leavePersonalTip);
button.addEventListener('click', calculateFinalButton);
console.log('calculatefinalbutton', calculateFinalButton);
