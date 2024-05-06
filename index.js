document.getElementById('year').innerHTML = new Date().getFullYear();

const userButton = document.getElementById('user-button');
const businessButton = document.getElementById('business-button');
const lawMakerButton = document.getElementById('law-maker-button');

const customerContent = document.getElementById('customer-content');
const businessContent = document.getElementById('business-content');
const lawMakerContent = document.getElementById('law-maker-content');

// Questions
function rightAnswer(q, but, ans) {
  const questionContainer = document.getElementById(q);
  const button = document.getElementById(but);

  if (ans == 'right') {
    button.classList.add('right-answer');
  }
  else {
    button.classList.add('wrong-answer');
  }
}

// Question 1
// const questionContainerQ1 = document.getElementById('question-container-q1');
// const Q1A = document.getElementById('q1a');
// const Q1B = document.getElementById('q1b');
// const Q1C = document.getElementById('q1c');
// const Q1D = document.getElementById('q1d');

// function resetButtonColorsQ1() {
//   Q1A.style.backgroundColor = 'black';
//   Q1B.style.backgroundColor = 'black';
//   Q1C.style.backgroundColor = 'black';
//   Q1D.style.backgroundColor = 'black';
// }

// Q1A.addEventListener('click', () => {
//   resetButtonColorsQ1();
//   Q1A.style.backgroundColor = 'green';
// });
// Q1B.addEventListener('click', () => {
//   resetButtonColorsQ1(); 
//   Q1B.style.backgroundColor = 'red';
// });
// Q1C.addEventListener('click', () => {
//   resetButtonColorsQ1();
//   Q1C.style.backgroundColor = 'red';
// });
// Q1D.addEventListener('click', () => {
//   resetButtonColorsQ1();
//   Q1D.style.backgroundColor = 'red';
// });

// Question 2
const questionContainerQ2 = document.getElementById('question-container-q2');
const Q2A = document.getElementById('q2a');
const Q2B = document.getElementById('q2b');
const Q2C = document.getElementById('q2c');
const Q2D = document.getElementById('q2d');

function resetButtonColorsQ2() {
  Q2A.style.backgroundColor = 'black';
  Q2B.style.backgroundColor = 'black';
  Q2C.style.backgroundColor = 'black';
  Q2D.style.backgroundColor = 'black';
}

Q2A.addEventListener('click', () => {
  resetButtonColorsQ2();
  Q2A.style.backgroundColor = 'red';
});
Q2B.addEventListener('click', () => {
  resetButtonColorsQ2(); 
  Q2B.style.backgroundColor = 'red';
});
Q2C.addEventListener('click', () => {
  resetButtonColorsQ2();
  Q2C.style.backgroundColor = 'green';
});
Q2D.addEventListener('click', () => {
  resetButtonColorsQ2();
  Q2D.style.backgroundColor = 'red';
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

var session = {
  messages: [
    {
      role: 'system',
      content: 'You are a customer service representative on an eCommerce website follow standard company policies and guidelines.'
    }
  ]
};

function fetchChatbotResponse() {
  const userMessage = document.getElementById('user-message').value;
  if (userMessage === '') {
    alert('Please enter a message');
    return;
  }
  document.getElementById('user-message').value = '';
  const chatbotBody = document.querySelector('.chatbot-body');
  var userSpan = document.createElement('span');
  userSpan.className = 'user-response';
  userSpan.textContent = userMessage;
  chatbotBody.appendChild(userSpan);
  session.messages.push({
    role: 'user',
    content: userMessage
  });
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer $OPENAI_API_KEY'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: session.messages
    })
  })
    .then(response => response.json())
    .then(data => {
      const chatbotResponse = data.choices[0].message.content;
      
      session.messages.push(data.choices[0].message);
      var chatbotSpan = document.createElement('span');
      chatbotSpan.className = 'chatbot-response';
      console.log(session.messages);
      chatbotSpan.textContent = chatbotResponse;
      chatbotBody.appendChild(chatbotSpan);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
