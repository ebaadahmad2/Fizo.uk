const chatItems = document.getElementById("chatItems");
const chatWindow = document.getElementById("chatWindow");
const input = document.getElementById("input");
const sendBtn = document.getElementById("sendBtn");

// Sample chat list
const chats = ["Math Help", "AI Coding", "Fortnite Map Ideas"];
chats.forEach(name => {
  const li = document.createElement("li");
  li.textContent = name;
  chatItems.appendChild(li);
});

function addMessage(text, type = "bot") {
  const msg = document.createElement("div");
  msg.className = `message ${type}`;
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  const msg = input.value.trim();
  if (msg) {
    addMessage(msg, "user");
    input.value = "";
    setTimeout(() => {
      addMessage("🤖 FIZO: I'm thinking...");
    }, 600);
  }
});
