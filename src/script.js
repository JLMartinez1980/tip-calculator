//Need to use Rejex so numbers only can be used
//This is for the bill before the tip.
function changeEventHandler({ value }) {
  const tipPercentage = tipCal(value);
  const bill = document.getElementById('reneredBill').value;
  const total = tipPercentage * Number(bill);
  document.getElementById("percentage").innerHTML = `Total: $${total}`;
}

//use a switch to figure out the tip% attached to an experience
//don't put eventhandler, just pass it a value
//make sure to match the value on the html side,
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

const button = document.getElementById('leaveTip');
button.addEventListener('click', calculateBill);

function calculateBill(bill, total) {
  console.log("bill", bill);
  console.log('total', total);
  return total + bill;
}
