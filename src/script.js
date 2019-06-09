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
      // break;
    case "good":
      return 9/50;
      // break;
    case "eh":
     return 1/10;
  }
}

const billInfo = "This is your total Bill including tip:";
//Need to use Rejex so numbers only can be used
//Taking the total bill and multiplying it by a % to receive a total tip
changeEventHandler = ({ value }) => {
  const tipPercentage = tipCal(value).toFixed(2);
  const bill = document.getElementById('reneredBill').value;
  const total = tipPercentage * Number(bill).toFixed(2);
  document.getElementById("basedUponExperience").innerHTML = "Based upon experience it is suggested you tip"
  document.getElementById("percentage").innerHTML = `Total: $${total}`;
}
/*
  When pulling information from getElementById make sure if the element
  I am pulling from is innerHTML to use that in place of .value. .split will cut
  the information in 1/2 creating an array ' ' creates a space .replace will take
  any value and replace it with a value or a space this is was used to take the
  $ and completly erase it leaving me a number only
 */
calculateBill = (e) => {

  const bill = Number(document.getElementById('reneredBill').value);
  const calculatedTip = document.getElementById("percentage").innerHTML;
  const newTip = Number(calculatedTip.split(' ')[1].replace('$', ''));
  document.getElementById("showTheBill").innerHTML = billInfo;
  document.getElementById("showMeTheMoney").innerHTML = `$${bill + newTip}`;
  e.preventDefault();
}

//cannot get a value from a button
const button = document.getElementById('leaveTip');
button.addEventListener('click', calculateBill);

/*
Code for leaving a custom Tip'
I would like to write some logic so if a tip of less than 10% is left that the
user is informed.
*/
customTip = (e) => {
  const bill = Number(document.getElementById('reneredBill').value);
  const customTip = Number(document.getElementById('reneredCustomTip').value);
  const newTip = Number(bill + customTip);
  document.getElementById('customInformation').innerHTML = billInfo;
  document.getElementById('showCustomTip').innerHTML = `$${newTip}`;
  e.preventDefault();
  }

const customButton = document.getElementById('leaveCustomTip');
customButton.addEventListener('click', customTip);

/* This is code to leave no tip */


leaveNoTip = (e) => {
  const noTip = ["The U.S. has a bizarre government-imposed system that allows restaurants to pay waiters just $2.13 per hour",
  "Remember that we are human beings! I can’t tell you how many times customer comments and actions made me feel stupid, or inadequate even ugly says Amber Villani Newberry, who has 10 years of serving under her belt.",
  "ALTHOUGH TIPS ARE NOT MANDATORY, YOU ARE CHOOSING TO USE THE SERVICE.",
];
  let random = noTip[Math.floor(Math.random() * noTip.length)];
  document.getElementById('leaveNoTip').innerHTML = random;
  e.preventDefault();
}

const leaveNoTipButton = document.getElementById('noIWillNotTip');
leaveNoTipButton.addEventListener('click', leaveNoTip);
