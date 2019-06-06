//use a switch to figure out the tip% attached to an experience
//don't put eventhandler as an argument, just pass it a value
//make sure to match the value on the html side,
//do not use return "value" = 1/10
const tipCal = (value) => {
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
  I am pulling from is innerHTML to use that in place of .value. .split will cut
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
  console.log('showMeTheMoney', showMeTheMoney);
}

//cannot get a value from a button
const button = document.getElementById('leaveTip');
button.addEventListener('click', calculateBill);
console.log('button', button);
