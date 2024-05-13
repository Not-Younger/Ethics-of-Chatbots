var darkMode = false;
var selected = 'user-button';

document.getElementById('year').innerHTML = new Date().getFullYear();

const userButtons = document.getElementsByClassName('user-button');
const businessButtons = document.getElementsByClassName('business-button');
const lawMakerButtons = document.getElementsByClassName('law-maker-button');

const customerContent = document.getElementById('customer-content');
const businessContent = document.getElementById('business-content');
const lawMakerContent = document.getElementById('law-maker-content');

// Dark mode function
function toggleDarkMode() {
  darkMode = !darkMode;
  if (darkMode) {
    document.documentElement.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
  }
  if (selected == 'user-button') {
    showCustomerContent();
  }
  else if (selected == 'business-button') {
    showBusinessContent();
  }
  else {
    showLawMakerContent();
  }
}

// Initial state
for (let i = 0; i < userButtons.length; i++) {
  userButtons[i].classList.add('selected');
}
customerContent.style.display = 'block';
businessContent.style.display = 'none';
lawMakerContent.style.display = 'none';

function resetButtons() {
  for (let i = 0; i < userButtons.length; i++) {
    userButtons[i].classList.remove('selected');
    businessButtons[i].classList.remove('selected');
    lawMakerButtons[i].classList.remove('selected');
  } 
}

function showCustomerContent() {
  customerContent.style.display = 'block';
  businessContent.style.display = 'none';
  lawMakerContent.style.display = 'none';

  resetButtons();
  selected = 'user-button';
  for (let i = 0; i < userButtons.length; i++) {
    userButtons[i].classList.add('selected');
  }
};

function showBusinessContent() {
  customerContent.style.display = 'none';
  businessContent.style.display = 'block';
  lawMakerContent.style.display = 'none';

  resetButtons();
  selected = 'business-button';
  for (let i = 0; i < businessButtons.length; i++) {
    businessButtons[i].classList.add('selected');
  }
};

function showLawMakerContent() {
  customerContent.style.display = 'none';
  businessContent.style.display = 'none';
  lawMakerContent.style.display = 'block';

  resetButtons();
  selected = 'law-maker-button';
  for (let i = 0; i < lawMakerButtons.length; i++) {
    lawMakerButtons[i].classList.add('selected');
  }
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
