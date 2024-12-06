let currentQuestionIndex = 0;
let score = 0;
const quizData = [
    // Easy Level
  { level: "easy", question: "What is a strong password?", options: [
    "A password that includes numbers, symbols, and both upper and lowercase letters, like protecting the ocean with a diverse set of conservation measures.",
    "123456",
    "password",
    "qwerty"
  ], answer: "A password that includes numbers, symbols, and both upper and lowercase letters, like protecting the ocean with a diverse set of conservation measures." },

  { level: "easy", question: "What is spear phishing?", options: [
    "A targeted phishing attack on a specific person or organization, like how pollution targets specific areas of the ocean.",
    "A method to reduce storage usage",
    "A tool to encrypt emails",
    "A type of antivirus"
  ], answer: "A targeted phishing attack on a specific person or organization, like how pollution targets specific areas of the ocean." },

  { level: "easy", question: "What is SQL injection?", options: [
    "A type of attack that exploits vulnerabilities in a website’s database system, like how invasive species harm specific marine ecosystems.",
    "A tool for cleaning your device",
    "A method to protect your data from hackers",
    "A type of firewall"
  ], answer: "A type of attack that exploits vulnerabilities in a website’s database system, like how invasive species harm specific marine ecosystems." },

  { level: "easy", question: "What does HTTPS stand for?", options: [
    "Hyper Text Transfer Protocol Secure, like secure ecosystems within marine reserves.",
    "Hyper Text Transaction Protocol Secure",
    "Hyper Transfer Text Protocol",
    "None of the above"
  ], answer: "Hyper Text Transfer Protocol Secure, like secure ecosystems within marine reserves." },

  { level: "easy", question: "What is a firewall?", options: [
    "A tool to monitor and control incoming and outgoing network traffic, like a protective barrier against threats, just like ocean conservation areas protect marine life.",
    "A security feature in your browser",
    "A type of malware",
    "An internet service provider"
  ], answer: "A tool to monitor and control incoming and outgoing network traffic, like a protective barrier against threats, just like ocean conservation areas protect marine life." },

  { level: "easy", question: "What is two-factor authentication?", options: [
    "A method of securing your accounts using two methods, like using both sustainable fishing and marine protected areas to conserve ocean life.",
    "A password with two symbols",
    "A type of firewall",
    "A virus protection software"
  ], answer: "A method of securing your accounts using two methods, like using both sustainable fishing and marine protected areas to conserve ocean life." },

  { level: "easy", question: "What is malware?", options: [
    "Malicious software designed to harm a system, like ocean pollution harms marine ecosystems.",
    "A password manager",
    "A website blocking tool",
    "A form of antivirus software"
  ], answer: "Malicious software designed to harm a system, like ocean pollution harms marine ecosystems." },

  { level: "easy", question: "What does VPN stand for?", options: [
    "Virtual Private Network, which creates a secure connection, like ocean currents ensuring safe migration paths for sea creatures.",
    "Visual Privacy Network",
    "Virtual Protocol Network",
    "Voice Protection Network"
  ], answer: "Virtual Private Network, which creates a secure connection, like ocean currents ensuring safe migration paths for sea creatures." },

  { level: "easy", question: "What is encryption?", options: [
    "The process of encoding information to protect it from unauthorized access, like the ocean’s deep waters protect its ecosystem from disturbances.",
    "A form of password protection",
    "A method of speeding up your connection",
    "A type of malware"
  ], answer: "The process of encoding information to protect it from unauthorized access, like the ocean’s deep waters protect its ecosystem from disturbances." },

  { level: "easy", question: "What is a phishing attack?", options: [
    "A fraudulent attempt to obtain sensitive information, like how overfishing threatens marine biodiversity.",
    "A type of password recovery",
    "A secure encryption method",
    "A malware protection software"
  ], answer: "A fraudulent attempt to obtain sensitive information, like how overfishing threatens marine biodiversity." },
  // Medium Level
  { level: "medium", question: "What is a DDoS attack?", options: [
    "A Distributed Denial of Service attack that floods a website with traffic, like pollution flooding marine environments.",
    "A data backup tool",
    "A firewall setup method",
    "A password encryption tool"
  ], answer: "A Distributed Denial of Service attack that floods a website with traffic, like pollution flooding marine environments." },

  { level: "medium", question: "What is ransomware?", options: [
    "Malware that locks users' data and demands payment, like illegal fishing locks marine resources for profit.",
    "A password protection method",
    "A type of firewall",
    "A virus detection tool"
  ], answer: "Malware that locks users' data and demands payment, like illegal fishing locks marine resources for profit." },

  { level: "medium", question: "What is the purpose of a patch?", options: [
    "A fix for a software vulnerability, like restoring damaged coral reefs to their natural state.",
    "A type of encryption",
    "A form of malware",
    "A virus protection software"
  ], answer: "A fix for a software vulnerability, like restoring damaged coral reefs to their natural state." },

  { level: "medium", question: "What is a botnet?", options: [
    "A network of compromised devices used to launch attacks, like harmful algae blooms affecting marine ecosystems.",
    "A password manager",
    "A virus protection tool",
    "A secure network"
  ], answer: "A network of compromised devices used to launch attacks, like harmful algae blooms affecting marine ecosystems." },

  { level: "medium", question: "What is a brute-force attack?", options: [
    "A method of trying many passwords to find the correct one, like overexploitation of ocean resources depleting marine life.",
    "A type of virus",
    "A secure encryption method",
    "A tool to monitor network traffic"
  ], answer: "A method of trying many passwords to find the correct one, like overexploitation of ocean resources depleting marine life." },

  { level: "medium", question: "What is a digital certificate?", options: [
    "A method of proving a website's authenticity, like ensuring sustainable fishing practices are verified.",
    "A tool to create a password",
    "A method for encrypting information",
    "A type of malware"
  ], answer: "A method of proving a website's authenticity, like ensuring sustainable fishing practices are verified." },

  { level: "medium", question: "What is a VPN used for?", options: [
    "A VPN secures your internet connection, like a marine sanctuary protects vulnerable species.",
    "A method to back up data",
    "A tool for encryption",
    "A firewall setup tool"
  ], answer: "A VPN secures your internet connection, like a marine sanctuary protects vulnerable species." },

  { level: "medium", question: "What does anti-virus software do?", options: [
    "It prevents malicious software from damaging your system, like clean oceans help preserve marine biodiversity.",
    "A method for data encryption",
    "A tool for reducing internet speed",
    "A firewall protection tool"
  ], answer: "It prevents malicious software from damaging your system, like clean oceans help preserve marine biodiversity." },

  { level: "medium", question: "What is an SSL certificate?", options: [
    "A security protocol for securing data exchanges, like protecting coral reefs from illegal fishing.",
    "A method for encrypting data",
    "A type of firewall",
    "A form of malware protection"
  ], answer: "A security protocol for securing data exchanges, like protecting coral reefs from illegal fishing." },

  { level: "medium", question: "What is a vulnerability?", options: [
    "A weakness in a system that can be exploited, like a gap in conservation efforts leaving marine ecosystems vulnerable.",
    "A method to encrypt data",
    "A type of malware",
    "A firewall setting"
  ], answer: "A weakness in a system that can be exploited, like a gap in conservation efforts leaving marine ecosystems vulnerable." },

 // Good Level
 { level: "good", question: "What is a zero-day attack?", options: [
    "An attack that takes advantage of a previously unknown vulnerability, like the sudden destruction of a coral reef ecosystem.",
    "A type of malware",
    "A firewall setting",
    "A data encryption method"
  ], answer: "An attack that takes advantage of a previously unknown vulnerability, like the sudden destruction of a coral reef ecosystem." },

  { level: "good", question: "What is the purpose of data encryption?", options: [
    "To protect sensitive information from unauthorized access, like safeguarding ocean resources from exploitation.",
    "A method to speed up internet connections",
    "A firewall protection method",
    "A way to back up data"
  ], answer: "To protect sensitive information from unauthorized access, like safeguarding ocean resources from exploitation." },

  { level: "good", question: "What is a penetration test?", options: [
    "A simulated attack on a system to identify vulnerabilities, like monitoring the health of an ocean ecosystem to identify threats.",
    "A malware detection tool",
    "A password recovery method",
    "A virus protection software"
  ], answer: "A simulated attack on a system to identify vulnerabilities, like monitoring the health of an ocean ecosystem to identify threats." },

  { level: "good", question: "What is the difference between black hat and white hat hackers?", options: [
    "Black hat hackers are malicious, while white hat hackers help protect systems, like the difference between illegal and legal fishing practices.",
    "Black hat hackers are security experts, while white hat hackers are criminals.",
    "Both are malicious",
    "None of the above"
  ], answer: "Black hat hackers are malicious, while white hat hackers help protect systems, like the difference between illegal and legal fishing practices." },

  { level: "good", question: "What is a security patch?", options: [
    "An update to fix security vulnerabilities, like how coral restoration can help rejuvenate marine ecosystems.",
    "A password recovery tool",
    "A method for backing up data",
    "A type of virus"
  ], answer: "An update to fix security vulnerabilities, like how coral restoration can help rejuvenate marine ecosystems." },

  { level: "good", question: "What is the purpose of intrusion detection systems (IDS)?", options: [
    "To detect unauthorized access to a network, like monitoring illegal fishing activity in protected marine areas.",
    "To secure your password",
    "To back up your data",
    "To speed up your internet connection"
  ], answer: "To detect unauthorized access to a network, like monitoring illegal fishing activity in protected marine areas." },

  { level: "good", question: "What is cross-site scripting (XSS)?", options: [
    "A vulnerability that allows attackers to inject malicious scripts into webpages, like pollution affecting the safety of marine environments.",
    "A type of firewall",
    "A method of encrypting data",
    "A virus detection tool"
  ], answer: "A vulnerability that allows attackers to inject malicious scripts into webpages, like pollution affecting the safety of marine environments." },

  { level: "good", question: "What is a man-in-the-middle (MITM) attack?", options: [
    "An attack where an attacker intercepts and alters communication between two parties, like illegal poaching interrupting marine migration.",
    "A type of malware",
    "A password encryption method",
    "A firewall setup"
  ], answer: "An attack where an attacker intercepts and alters communication between two parties, like illegal poaching interrupting marine migration." },

  { level: "good", question: "What is the difference between symmetric and asymmetric encryption?", options: [
    "Symmetric encryption uses one key, while asymmetric encryption uses two keys, like single-use plastic vs. reusable solutions for ocean protection.",
    "Symmetric encryption uses two keys, while asymmetric uses one key",
    "Both use the same key",
    "None of the above"
  ], answer: "Symmetric encryption uses one key, while asymmetric encryption uses two keys, like single-use plastic vs. reusable solutions for ocean protection." },
  {level: "good",
  question: "What is the difference between symmetric and asymmetric encryption?",
  options: [
    "Symmetric encryption uses one key, while asymmetric encryption uses two keys, like single-use plastic vs. reusable solutions for ocean protection.",
    "Symmetric encryption uses two keys, while asymmetric uses one key",
    "Both use the same key",
    "None of the above"
  ],
  answer: "Symmetric encryption uses one key, while asymmetric encryption uses two keys, like single-use plastic vs. reusable solutions for ocean protection."
},
// 10 Hard Questions
{
    level: "hard",
    question: "What is the purpose of a certificate authority (CA) in SSL/TLS?",
    options: [
      "It encrypts the traffic between the server and the client.",
      "It verifies the authenticity of a website's public key.",
      "It stores user credentials securely.",
      "It generates secure tokens for user authentication."
    ],
    answer: "It verifies the authenticity of a website's public key."
  },
  {
    level: "hard",
    question: "What is the main goal of a Distributed Denial of Service (DDoS) attack?",
    options: [
      "To steal sensitive data from a server.",
      "To overload the server with traffic, making it unavailable to users.",
      "To install malware on a user's device.",
      "To compromise a website's SSL certificate."
    ],
    answer: "To overload the server with traffic, making it unavailable to users."
  },
  {
    level: "hard",
    question: "What is the primary difference between TCP and UDP?",
    options: [
      "TCP is connection-oriented, while UDP is connectionless.",
      "TCP is faster than UDP.",
      "UDP guarantees data delivery, while TCP does not.",
      "TCP is used only for video streaming, while UDP is used for emails."
    ],
    answer: "TCP is connection-oriented, while UDP is connectionless."
  },
  {
    level: "hard",
    question: "What is the purpose of a VLAN in networking?",
    options: [
      "It encrypts the traffic between different network segments.",
      "It segments a network into smaller broadcast domains for efficiency and security.",
      "It connects different networks together.",
      "It ensures the security of data transmitted between two routers."
    ],
    answer: "It segments a network into smaller broadcast domains for efficiency and security."
  },
  {
    level: "hard",
    question: "What is the purpose of DNSSEC (Domain Name System Security Extensions)?",
    options: [
      "It encrypts DNS queries and responses to prevent eavesdropping.",
      "It verifies the authenticity and integrity of DNS responses.",
      "It speeds up DNS resolution for websites.",
      "It prevents DNS caching attacks."
    ],
    answer: "It verifies the authenticity and integrity of DNS responses."
  },
  {
    level: "hard",
    question: "Which of the following is a feature of a Zero Trust security model?",
    options: [
      "Trusting users inside the network and blocking external threats.",
      "Always verifying users and devices, regardless of whether they are inside or outside the network.",
      "Limiting network access only to VIP users.",
      "Only allowing users with strong passwords to access the network."
    ],
    answer: "Always verifying users and devices, regardless of whether they are inside or outside the network."
  },
  {
    level: "hard",
    question: "What is an example of a man-in-the-middle attack?",
    options: [
      "A hacker intercepts communication between a user and a server, altering the data sent between them.",
      "A hacker blocks a server from communicating with its clients.",
      "A hacker steals a user's login credentials from a server.",
      "A hacker floods a server with traffic to make it unavailable."
    ],
    answer: "A hacker intercepts communication between a user and a server, altering the data sent between them."
  },
  {
    level: "hard",
    question: "Which of the following encryption algorithms is widely used for securing communications over the internet?",
    options: [
      "RSA",
      "DES",
      "AES",
      "All of the above"
    ],
    answer: "RSA"
  },
  {
    level: "hard",
    question: "What is the function of an IDS (Intrusion Detection System)?",
    options: [
      "It prevents unauthorized access to a network by filtering traffic.",
      "It monitors network traffic and alerts administrators about suspicious activity.",
      "It generates encryption keys for secure communication.",
      "It conducts penetration testing on a network."
    ],
    answer: "It monitors network traffic and alerts administrators about suspicious activity."
  },
  {
    level: "hard",
    question: "Which type of attack exploits the weakness of an application by sending unexpected inputs to the application to crash it?",
    options: [
      "Buffer overflow",
      "SQL injection",
      "Cross-site scripting (XSS)",
      "Man-in-the-middle attack"
    ],
    answer: "Buffer overflow"
  },
    // 10 World-Class Questions
    {
        level: "world-class",
        question: "What is Quantum Key Distribution (QKD), and how does it enhance encryption security?",
        options: [
          "It uses quantum mechanics to secure encryption keys, ensuring that any eavesdropping attempts can be detected.",
          "It uses quantum computing to break existing encryption methods.",
          "It relies on classical encryption methods but uses quantum computing to speed up encryption.",
          "It is a technique used to encrypt data on physical hard drives."
        ],
        answer: "It uses quantum mechanics to secure encryption keys, ensuring that any eavesdropping attempts can be detected."
      },
      {
        level: "world-class",
        question: "What is a zero-day vulnerability, and why is it critical in cybersecurity?",
        options: [
          "A vulnerability that is known to the public but has not been patched yet.",
          "A vulnerability that is exploited by attackers before the vendor is aware of it.",
          "A vulnerability that can be exploited only on a specific day of the year.",
          "A vulnerability that is patched on the same day it is discovered."
        ],
        answer: "A vulnerability that is exploited by attackers before the vendor is aware of it."
      },
      {
        level: "world-class",
        question: "How does a blockchain enhance security in decentralized systems?",
        options: [
          "By encrypting all user data.",
          "By creating a tamper-resistant ledger of transactions.",
          "By ensuring that only authorized users can access the system.",
          "By using multi-factor authentication for all transactions."
        ],
        answer: "By creating a tamper-resistant ledger of transactions."
      },
      {
        level: "world-class",
        question: "What is the role of a Security Operations Center (SOC) in an organization?",
        options: [
          "To monitor and respond to security incidents and threats in real-time.",
          "To perform regular backups of critical data.",
          "To manage employee access to sensitive information.",
          "To ensure compliance with privacy laws and regulations."
        ],
        answer: "To monitor and respond to security incidents and threats in real-time."
      },
      {
        level: "world-class",
        question: "What is the concept of 'Security by Design'?",
        options: [
          "Integrating security measures into the design and development of systems from the start.",
          "Adding security features to a system after it has been developed.",
          "Designing systems to detect and fix security vulnerabilities in real-time.",
          "Focusing on securing the physical hardware of a system."
        ],
        answer: "Integrating security measures into the design and development of systems from the start."
      },
      {
        level: "world-class",
        question: "What is the primary function of a Web Application Firewall (WAF)?",
        options: [
          "To prevent unauthorized access to the web server.",
          "To monitor traffic and block malicious HTTP requests that could compromise the application.",
          "To ensure all traffic to and from a website is encrypted.",
          "To prevent DDoS attacks against a website."
        ],
        answer: "To monitor traffic and block malicious HTTP requests that could compromise the application."
      },
      {
        level: "world-class",
        question: "How does machine learning help in detecting advanced persistent threats (APTs)?",
        options: [
          "By automating network security processes and reducing the need for human intervention.",
          "By analyzing patterns of normal behavior and flagging anomalies indicative of APTs.",
          "By creating stronger firewalls to prevent external attacks.",
          "By providing advanced encryption to protect against data theft."
        ],
        answer: "By analyzing patterns of normal behavior and flagging anomalies indicative of APTs."
      },
      {
        level: "world-class",
        question: "What is the concept of 'Least Privilege' in security?",
        options: [
          "Granting users the minimum level of access required to perform their tasks.",
          "Allowing users to access all parts of the system but auditing their actions.",
          "Giving users full access to all data and systems to prevent mistakes.",
          "Providing administrative access only to senior employees."
        ],
        answer: "Granting users the minimum level of access required to perform their tasks."
      },
      {
        level: "world-class",
        question: "How does multi-factor authentication (MFA) enhance security?",
        options: [
          "It requires users to verify their identity through two or more independent factors.",
          "It allows users to log in using just a username and password.",
          "It monitors network traffic for security threats.",
          "It encrypts all communications between users and servers."
        ],
        answer: "It requires users to verify their identity through two or more independent factors."
      },
      {
        level: "world-class",
        question: "What is the significance of penetration testing in cybersecurity?",
        options: [
          "To simulate an attack on the system to find vulnerabilities before an attacker does.",
          "To monitor network traffic in real-time for potential attacks.",
          "To create stronger firewalls that prevent unauthorized access.",
          "To train employees on security best practices."
        ],
        answer: "To simulate an attack on the system to find vulnerabilities before an attacker does."
      }

];

  
  
 // Display the current question
function displayQuestion() {
    const container = document.getElementById("quiz-container");
    container.innerHTML = ""; // Clear previous content
  
    if (currentQuestionIndex < quizData.length) {
      const questionData = quizData[currentQuestionIndex];
  
      // Display question
      const questionElement = document.createElement("h2");
      questionElement.textContent = questionData.question;
      container.appendChild(questionElement);
  
      // Display options with radio buttons
      const optionsList = document.createElement("ul");
      optionsList.className = "option-container";
  
      questionData.options.forEach((option, index) => {
        const listItem = document.createElement("li");
  
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.id = `option${index}`;
        radioInput.name = "answer";
        radioInput.value = option;
  
        const label = document.createElement("label");
        label.htmlFor = `option${index}`;
        label.textContent = option;
  
        listItem.appendChild(radioInput);
        listItem.appendChild(label);
        optionsList.appendChild(listItem);
      });
  
      container.appendChild(optionsList);
  
      // Add "Next" button
      const nextButton = document.createElement("button");
      nextButton.id = "next-button";
      nextButton.textContent = "Next";
      nextButton.disabled = true; // Disable until an option is selected
      nextButton.addEventListener("click", () => checkAnswer(questionData.answer));
      container.appendChild(nextButton);
  
      // Enable "Next" button when an option is selected
      const radios = document.querySelectorAll('input[name="answer"]');
      radios.forEach((radio) => {
        radio.addEventListener("change", () => {
          nextButton.disabled = false;
        });
      });
    } else {
      displayResult(); // Show results if no more questions
    }
  }
  
  // Check the selected answer
  function checkAnswer(correctAnswer) {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption && selectedOption.value === correctAnswer) {
      score++;
    }
    currentQuestionIndex++;
    displayQuestion();
  }
  
  function displayResult() {
    const container = document.getElementById("quiz-container");
    container.style.display = "none";
  
    const resultContainer = document.getElementById("result-container");
    resultContainer.style.display = "block";
  
    // Score summary
    const scoreSummary = document.createElement("h2");
    scoreSummary.textContent = `Your Score: ${score}/${quizData.length}`;
    resultContainer.appendChild(scoreSummary);
  
    // Performance evaluation and image
    const performanceMessage = document.createElement("p");
    const performanceImage = document.createElement("img"); // Create image element
    const percentage = (score / quizData.length) * 100;
    
    if (percentage >= 90) {
      performanceMessage.textContent = "Performance: World-Class!";
      performanceImage.src = "40-50.png"; // Set image source
    } else if (percentage >= 75) {
      performanceMessage.textContent = "Performance: Excellent!";
      performanceImage.src = "30-40.png";
    } else if (percentage >= 50) {
      performanceMessage.textContent = "Performance: Well Done!";
      performanceImage.src = "20-30.png";
    } else if (percentage >= 30) {
      performanceMessage.textContent = "Performance: Amazing!";
      performanceImage.src = "10-20.png";
    } else if (percentage >= 10) {
      performanceMessage.textContent = "Performance: Good!";
      performanceImage.src = "0-10.png";
    } else {
      performanceMessage.textContent = "Performance: Keep Practicing!";
      performanceImage.src = "0-10.png";
    }
  
    // Append the message and image
    resultContainer.appendChild(performanceMessage);
    resultContainer.appendChild(performanceImage);
  
    // Display questions with correct answers
    quizData.forEach((q, index) => {
      const questionReview = document.createElement("div");
      questionReview.innerHTML = `<h3>Question ${index + 1}: ${q.question}</h3>
                                  <p>Correct Answer: ${q.answer}</p>`;
      resultContainer.appendChild(questionReview);
    });
  }
  
  // Initialize quiz
  displayQuestion();