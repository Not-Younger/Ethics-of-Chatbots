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
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer $OPENAI_API_KEY'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.'
        },
        {
          role: 'user',
          content: userMessage
        }
      ]
    })
  })
    .then(response => response.json())
    .then(data => {
      const chatbotResponse = data.choices[0].message.content;
  
      // Create new span for chatbot response
      var chatbotSpan = document.createElement('span');
      console.log(chatbotResponse);
      chatbotSpan.textContent = chatbotResponse; // Assuming chatbotResponse is the variable holding the response from the chatbot
      chatbotBody.appendChild(chatbotSpan);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}