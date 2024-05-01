document.getElementById('year').innerHTML = new Date().getFullYear();

const userButton = document.getElementById('user-button');
const businessButton = document.getElementById('business-button');
const lawMakerButton = document.getElementById('law-maker-button');

const customerContent = document.getElementById('customer-content');
const businessContent = document.getElementById('business-content');
const lawMakerContent = document.getElementById('law-maker-content');

// Question 1
const questionContainerQ1 = document.getElementById('question-container-q1');
const Q1A = document.getElementById('q1a');
const Q1B = document.getElementById('q1b');
const Q1C = document.getElementById('q1c');
const Q1D = document.getElementById('q1d');

function resetButtonColorsQ1() {
  Q1A.style.backgroundColor = 'black';
  Q1B.style.backgroundColor = 'black';
  Q1C.style.backgroundColor = 'black';
  Q1D.style.backgroundColor = 'black';
}

Q1A.addEventListener('click', () => {
  resetButtonColorsQ1();
  Q1A.style.backgroundColor = 'green';
});
Q1B.addEventListener('click', () => {
  resetButtonColorsQ1(); 
  Q1B.style.backgroundColor = 'red';
});
Q1C.addEventListener('click', () => {
  resetButtonColorsQ1();
  Q1C.style.backgroundColor = 'red';
});
Q1D.addEventListener('click', () => {
  resetButtonColorsQ1();
  Q1D.style.backgroundColor = 'red';
});


userButton.style.backgroundColor = 'grey';
customerContent.style.display = 'block';
businessContent.style.display = 'none';
lawMakerContent.style.display = 'none';

function showCustomerContent() {
  userButton.style.backgroundColor = 'grey';
  businessButton.style.backgroundColor = 'black';
  lawMakerButton.style.backgroundColor = 'black';
  customerContent.style.display = 'block';
  businessContent.style.display = 'none';
  lawMakerContent.style.display = 'none';
};

function showBusinessContent() {
  userButton.style.backgroundColor = 'black';
  businessButton.style.backgroundColor = 'grey';
  lawMakerButton.style.backgroundColor = 'black';
  customerContent.style.display = 'none';
  businessContent.style.display = 'block';
  lawMakerContent.style.display = 'none';
};

function showLawMakerContent() {
  userButton.style.backgroundColor = 'black';
  businessButton.style.backgroundColor = 'black';
  lawMakerButton.style.backgroundColor = 'grey';
  customerContent.style.display = 'none';
  businessContent.style.display = 'none';
  lawMakerContent.style.display = 'block';
};