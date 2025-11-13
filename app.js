const chat = document.getElementById('chat');
const input = document.getElementById('input');

async function sendMessage(msg) {
  chat.innerHTML += `<div><b>You:</b> ${msg}</div>`;
  chat.innerHTML += `<div><b>FIZO:</b> Thinking... (connect to backend here)</div>`;
}

if (input) {
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      sendMessage(input.value.trim());
      input.value = '';
    }
  });
}

