//If they desire to leave no tip
const leaveNoTip = () => {
  let string = ["The U.S. has a bizarre government-imposed system",
  "that allows restaurants to pay waiters just $2.13 per hour",
   "because they are expected to make up the difference",
   "with the federal minimum wage", "in tips", "If you feel",
   "service was inadequate please speak to a manager."];
  const whyNot = document.createElement("P");
  whyNot.innerHTML = string.join(' ');
  document.body.appendChild(whyNot);
}

const noIDoNotTip = document.getElementById('noIDoNot');
noIDoNot.addEventListener('click', leaveNoTip);

/*
  Create multiple functions that will allow me to use thier
  individual values for future onclicks
*/
const createTheForm = () => {
  let string = ["Would you like to leave a tip based",
  "upon your experience, or leave a custom tip?"]
  const doYouTip = document.createElement("H3");
  doYouTip.innerHTML = string.join(' ');
  document.body.appendChild(doYouTip);
};

  //Create experience button
const createExperienceButton = () => {
  let experienceButton = document.createElement('BUTTON');
  experienceButton.innerHTML = "EXPERIENCE";
  experienceButton.id = "myExperience";
  document.body.appendChild(experienceButton);
};
  //Create Custom Button
const createCustomButton = () => {
  let customButton = document.createElement('BUTTON');
  customButton.innerHTML = "Custom";
  customButton.id = "leaveCustomTip";
  document.body.appendChild(customButton);
};

  //create an input to put the Bill
  // I would like to move this underneath the two buttons
const createInput = () => {
  let totalAmountInput = document.createElement('INPUT');
  totalAmountInput.setAttribute("type", "text");
  totalAmountInput.setAttribute("value", "Your Bill Amount here");
  totalAmountInput.setAttribute("id", "totalAmountId");
  document.body.appendChild(totalAmountInput);
}

const allFormFunctions = () => {
  createTheForm();
  creatExperienceButton();
  createCustomButton();
  createInput();
};

const createFormButton = document.getElementById('yesIWould');
createFormButton.addEventListener('click',allFormFunctions);

//figure out total bill before tip?
//SEAN !! This return null, no value
// window.onload += function() {
// const figureTotalBill = document.getElementById('totalAmountId');
// console.log('figureTotalBill', figureTotalBill);
// };
// console.log(window.onload);

const figureTotalBill = element.getAttribute(totalAmountInput);
console.log('figureTotalBill', figureTotalBill);

//To leave a custom tip



//To leave tip based upon experience
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
