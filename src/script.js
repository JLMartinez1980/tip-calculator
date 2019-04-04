
//use a switch to figure out the tip% attached to an experience
//don't put eventhandler as an argument, just pass it a value
//make sure to match the value on the html side,
//do not use return "value" = 1/10
function tipCal(value) {
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
//This is for the bill before the tip.
function changeEventHandler({ value }) {
  const tipPercentage = tipCal(value);
  const bill = document.getElementById('reneredBill').value;
  const total = tipPercentage * Number(bill);
  document.getElementById("percentage").innerHTML = `Total: $${total}`;
}

function calculateBill() {
  const bill = Number(document.getElementById('reneredBill').value);
  const calculatedTip = document.getElementById("percentage").innerHTML;
  const newTip = Number(calculatedTip.split(' ')[1].replace('$', ''));
  document.getElementById("showMeTheMoney").innerHTML = `$${bill + newTip}`;
}

//cannot get a value from a button
const button = document.getElementById('leaveTip');
button.addEventListener('click', calculateBill);
