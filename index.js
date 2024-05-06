document.getElementById('year').innerHTML = new Date().getFullYear();

const userButton = document.getElementById('user-button');
const businessButton = document.getElementById('business-button');
const lawMakerButton = document.getElementById('law-maker-button');

const customerContent = document.getElementById('customer-content');
const businessContent = document.getElementById('business-content');
const lawMakerContent = document.getElementById('law-maker-content');

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

// Questions
function answer(q, but, ans) {
  const questionContainer = document.getElementById(q);
  const ansButton = document.getElementById(but);

  const buttons = questionContainer.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('right-answer');
    buttons[i].classList.remove('wrong-answer');
  }

  if (ans == 'right') {
    ansButton.classList.add('right-answer');
  }
  else {
    ansButton.classList.add('wrong-answer');
  }
}

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
