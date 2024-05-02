document.getElementById('year').innerHTML = new Date().getFullYear();

document.getElementById('user-button').style.backgroundColor = 'grey';
document.getElementById('customer-content').style.display = 'block';
document.getElementById('business-content').style.display = 'none';
document.getElementById('law-maker-content').style.display = 'none';

function showCustomerContent() {
  document.getElementById('user-button').style.backgroundColor = 'grey';
  document.getElementById('business-button').style.backgroundColor = 'black';
  document.getElementById('law-maker-button').style.backgroundColor = 'black';
  document.getElementById('customer-content').style.display = 'block';
  document.getElementById('business-content').style.display = 'none';
  document.getElementById('law-maker-content').style.display = 'none';
};

function showBusinessContent() {
  document.getElementById('user-button').style.backgroundColor = 'black';
  document.getElementById('business-button').style.backgroundColor = 'grey';
  document.getElementById('law-maker-button').style.backgroundColor = 'black';
  document.getElementById('customer-content').style.display = 'none';
  document.getElementById('business-content').style.display = 'block';
  document.getElementById('law-maker-content').style.display = 'none';
};

function showLawMakerContent() {
  document.getElementById('user-button').style.backgroundColor = 'black';
  document.getElementById('business-button').style.backgroundColor = 'black';
  document.getElementById('law-maker-button').style.backgroundColor = 'grey';
  document.getElementById('customer-content').style.display = 'none';
  document.getElementById('business-content').style.display = 'none';
  document.getElementById('law-maker-content').style.display = 'block';
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
