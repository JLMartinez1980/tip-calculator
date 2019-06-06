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
};

const noIDoNotTip = document.getElementById('noIDoNot');
noIDoNot.addEventListener('click', leaveNoTip);

//Create a form dynamically
const createTheForm = () => {
  let gatherInformation = document.createElement("FORM");
  gatherInformation.setAttribute("id", "newForm");
  document.body.appendChild(gatherInformation);

  //create a place to input bill
  let inputTotalBill = document.createElement("INPUT");
  inputTotalBill.setAttribute("type", "text");
  inputTotalBill.setAttribute("placeholder", "What is the total Bill");
  inputTotalBill.setAttribute("id", "totalBill");
  document.getElementById("newForm").appendChild(inputTotalBill);

  //Set up question leading to two buttons
  let question = ["How would you prefer to tip?"];
  let howWouldYouLikeToTip = document.createElement('P');
  howWouldYouLikeToTip.innerHTML = question.join(' ');
  document.body.appendChild(howWouldYouLikeToTip);

  let experienceButton = document.createElement('BUTTON');
  experienceButton.innerHTML = "EXPERIENCE";
  experienceButton.setAttribute = ("id", "myExperience");
  document.body.appendChild(experienceButton);

  let customButton = document.createElement('BUTTON');
  customButton.innerHTML = "Custom";
  customButton.setAttribute = ("id", "leaveCustomTip");
  document.body.appendChild(customButton);
};

const yesIWould = document.getElementById('yesIWould');
yesIWould.addEventListener('click', createTheForm);
