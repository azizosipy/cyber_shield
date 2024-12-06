// Page Content
const pages = {
    home: `
      <h1>Welcome to CyberShield</h1>
      <p>Your journey to cybersecurity starts here. Choose an option below:</p>
      <div class="container">
        <h2>Quiz</h2>
        <p>Test your cybersecurity knowledge.</p>
        <button onclick="navigateTo('quiz')">Start the Quiz</button>
      </div>
      <div class="container">
        <h2>Chatbot</h2>
        <p>Ask the chatbot your cybersecurity questions.</p>
        <button onclick="navigateTo('chatbot')">Open Chatbot</button>
      </div>
      <div class="container">
        <h2>Learn</h2>
        <p>Explore tips and videos about cybersecurity.</p>
        <button onclick="navigateTo('learn')">Learn More</button>
      </div>
    `,
    quiz: `
      <h1>CyberShield Quiz</h1>
      <p>Test your knowledge and improve your cybersecurity skills.</p>
      <button onclick="navigateTo('home')">Back to Home</button>
      <!-- Add quiz logic here -->
    `,
    chatbot: `
      <h1>CyberShield Chatbot</h1>
      <p>Ask me anything about cybersecurity.</p>
      <button onclick="navigateTo('home')">Back to Home</button>
      <div id="chatbot-placeholder">Chatbot feature coming soon!</div>
    `,
    learn: `
      <h1>Learn About Cybersecurity</h1>
      <p>Browse through tips and resources to enhance your knowledge.</p>
      <ul>
        <li><a href="https://example.com" target="_blank">Cybersecurity Basics</a></li>
        <li><a href="https://example.com" target="_blank">How to Spot Phishing Emails</a></li>
        <li><a href="https://example.com" target="_blank">Best Practices for Online Safety</a></li>
      </ul>
      <button onclick="navigateTo('home')">Back to Home</button>
    `
  };
  
  // Function to Load Pages
  function navigateTo(page) {
    document.getElementById("content").innerHTML = pages[page] || "<h1>Page Not Found</h1>";
  }
  
  // Load Home Page on Startup
  window.addEventListener("load", () => navigateTo("home"));
  