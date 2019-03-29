//Need to use Rejex so numbers only can be used
//This is for the bill before the tip, I will use This
//to help figure out the total bill with the tip
const renderBill = () => {
  let bill = document.getElementById('reneredBill').value;
  document.getElementById('enteredBill').innerHTML = bill;
}

const button = document.getElementById('saveAmount');
button.addEventListener('click', renderBill);

//Here is where I will figure out the experience/
//pair that experience with a tip amount
//make sure customer is happy with tip amount

//Attempt 1
// const experience = document.getElementById("experience");
// const userExperience = experience.options[experience.selectedIndex].value;
//
// console.log(userExperience, '1');


//Attempt 2


// I need to figure out how to return  innerhtml, i think to render the
//experience and then attach that experience to a value..
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('select[name="experience"]').onchange=changeEventHandler;
}, false);

const changeEventHandler = event => {
  if(!event.target.value) alert('please selct an experience');
 else alert('It looks like you had ' + event.target.value + ' experience');

}
