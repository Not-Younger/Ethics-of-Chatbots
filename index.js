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
  const chatbotResponse = 'Chatbot response to "' + userMessage + '"';
  document.getElementById('chatbot-response').innerHTML = chatbotResponse;
}