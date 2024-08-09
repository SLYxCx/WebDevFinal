/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let numberOfDays = 0;
let costPerDay = 35;

const monBtn = document.querySelector("#monday");
const tueBtn = document.querySelector("#tuesday");
const wedBtn = document.querySelector("#wednesday");
const thurBtn = document.querySelector("#thursday");
const friBtn = document.querySelector("#friday");

const fullBtn = document.querySelector("#full");
const halfBtn = document.querySelector("#half");

const clearBtn = document.querySelector("#clear-button");
const highlighted = [];


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function monEventHandler() {
    if (monBtn.classList.contains("clicked")) {
        monBtn.classList.remove("clicked");
        highlighted.pop();
    } else {monBtn.classList.add("clicked");
        highlighted.push("monday");
    } calculate();
}
monBtn.addEventListener("click", monEventHandler);

function tueEventHandler() {
    if (tueBtn.classList.contains("clicked")) {
        tueBtn.classList.remove("clicked");
        highlighted.pop();
    } else {tueBtn.classList.add("clicked");
        highlighted.push("tuesday");
    } calculate();
}
tueBtn.addEventListener("click", tueEventHandler);

function wedEventHandler() {
    if (wedBtn.classList.contains("clicked")) {
        wedBtn.classList.remove("clicked");
        highlighted.pop();
    } else {wedBtn.classList.add("clicked");
        highlighted.push("wednesday");
    } calculate();
}
wedBtn.addEventListener("click", wedEventHandler);

function thurEventHandler() {
    if (thurBtn.classList.contains("clicked")) {
        thurBtn.classList.remove("clicked");
        highlighted.pop();
    } else {thurBtn.classList.add("clicked");
        highlighted.push("thursday");
    } calculate();
}
thurBtn.addEventListener("click", thurEventHandler);

function friEventHandler() {
    if (friBtn.classList.contains("clicked")) {
        friBtn.classList.remove("clicked");
        highlighted.pop();
    } else {friBtn.classList.add("clicked");
        highlighted.push("friday");
    } calculate();
}
friBtn.addEventListener("click", friEventHandler);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearEventHandler() {
    highlighted.length = 0;
    const selected = document.querySelectorAll("li");
    selected.forEach(clicked => {
        clicked.classList.remove("clicked");
    });
    calculate();
}
clearBtn.addEventListener("click", clearEventHandler);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfEventHandler() {
    costPerDay = 20;
    if (halfBtn.classList.contains("clicked")) {
    } else {halfBtn.classList.add("clicked");
        fullBtn.classList.remove("clicked");
    } calculate();
}
halfBtn.addEventListener("click", halfEventHandler);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullEventHandler() {
    costPerDay = 35;
    if (fullBtn.classList.contains("clicked")) {
    } else {fullBtn.classList.add("clicked");
        halfBtn.classList.remove("clicked");
    } calculate();
}
fullBtn.addEventListener("click", fullEventHandler);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    // if (highlighted.length <= 0) {
    //     highlighted = 1
    // }
    numberOfDays = highlighted.length;
    let costLabel = document.getElementById("calculated-cost");
    costLabel.innerHTML = costPerDay * numberOfDays;
}

