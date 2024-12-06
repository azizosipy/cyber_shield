// Function to check if the email is phishing or not
function checkPhishing(answer) {
    const resultText = document.getElementById('quiz-result');
    
    if (answer === 'yes') {
        resultText.innerHTML = "Correct! This is a phishing attempt. Always be cautious of suspicious emails.";
        resultText.style.color = 'green';
    } else {
        resultText.innerHTML = "Oops! This is actually a phishing attempt. Be careful about clicking on suspicious links.";
        resultText.style.color = 'red';
    }
}
let correctPlacements = 0;
const totalItems = 5;

const itemsContainer = document.getElementById("items-container");
const reefSafeZone = document.getElementById("reef-safe-zone");
const dangerZone = document.getElementById("danger-zone");
const gameStatus = document.getElementById("game-status");
const endGameContainer = document.getElementById("end-game");
const finalScore = document.getElementById("final-score");
const gameBoard = document.querySelector(".game-board");

function startGame() {
    // Reset game state
    correctPlacements = 0;

    // Reset items container with draggable items
    itemsContainer.innerHTML = `
        <div class="item fish" draggable="true" data-type="safe">Use Strong Passwords</div>
        <div class="item shark" draggable="true" data-type="threat">Click Unknown Links</div>
        <div class="item fish" draggable="true" data-type="safe">Enable Two-Factor Authentication</div>
        <div class="item shark" draggable="true" data-type="threat">Share Passwords</div>
        <div class="item fish" draggable="true" data-type="safe">Use a VPN on Public Wi-Fi</div>
    `;

    // Reset drop zones
    reefSafeZone.innerHTML = "Reef Safe Zone";
    dangerZone.innerHTML = "Danger Zone";

    // Reset visibility of game board and hide end game container
    gameBoard.style.display = "block";
    endGameContainer.style.display = "none";

    // Clear any game status messages
    gameStatus.textContent = "";

    // Reattach drag-and-drop functionality
    attachDragAndDropEvents();
}
function showImage() {
    const imageContainer = document.getElementById('prize-image');
    imageContainer.style.display = 'block'; // Show the image

    // Optionally, you can also change the message or style after clicking
    const resultText = document.getElementById('quiz-result');
    resultText.innerHTML = "You clicked the prize claim link!";
    resultText.style.color = 'blue';
}


function attachDragAndDropEvents() {
    const items = document.querySelectorAll(".item");

    items.forEach((item) => {
        item.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text", event.target.dataset.type);
            event.target.style.opacity = "0.5";
        });

        item.addEventListener("dragend", (event) => {
            event.target.style.opacity = "1";
        });
    });

    [reefSafeZone, dangerZone].forEach((zone) => {
        zone.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        zone.addEventListener("drop", (event) => {
            const droppedType = event.dataTransfer.getData("text");
            const zoneType = zone.id === "reef-safe-zone" ? "safe" : "threat";

            if (droppedType === zoneType) {
                correctPlacements++;
                event.target.appendChild(document.querySelector(`[data-type="${droppedType}"]`));
            }

            if (correctPlacements === totalItems) {
                endGame();
            }
        });
    });
}

function endGame() {
    // Hide game board and display end game message
    gameBoard.style.display = "none";
    endGameContainer.style.display = "block";
    finalScore.textContent = `You scored ${correctPlacements}/${totalItems}!`;
}

let score = 0;
const scoreElement = document.getElementById('score');
const threats = document.querySelectorAll('.threat');
const resetButton = document.getElementById('reset-btn');
const oceanArea = document.getElementById('ocean-area');

// Function to generate random position for each cyber threat
function generateRandomPosition(element) {
    const maxX = oceanArea.clientWidth - 50; // To keep the cyber threat within the ocean area
    const maxY = oceanArea.clientHeight - 50; // To keep the cyber threat within the ocean area

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
}

// Function to handle click on a cyber threat
function onThreatClick(event) {
    score++; // Increase score
    scoreElement.textContent = score; // Update score
    generateRandomPosition(event.target); // Move the threat to a new random position
}

// Function to reset the game
function resetGame() {
    score = 0;
    scoreElement.textContent = score; // Reset score
    threats.forEach((threat) => generateRandomPosition(threat)); // Reset positions
    resetButton.style.display = 'none'; // Hide reset button
    threats.forEach((threat) => threat.style.visibility = 'visible'); // Make all threats visible
}

// Show reset button after a few seconds to end the game
function endGame() {
    setTimeout(() => {
        resetButton.style.display = 'block'; // Show reset button
        threats.forEach((threat) => threat.style.visibility = 'hidden'); // Hide threats
    }, 2000); // Game ends after 2 seconds
}

// Add event listeners for each cyber threat
threats.forEach((threat) => {
    threat.addEventListener('click', onThreatClick);
});

// Initialize game
threats.forEach((threat) => generateRandomPosition(threat)); // Place threats randomly
endGame();
