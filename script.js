// Static list of challenges with emojis
const challenges = [
    { id: 1, task: "Run 10 miles today. 🏃‍♂️" },
    { id: 2, task: "Do 50 jumping jacks. 🤸‍♀️" },
    { id: 3, task: "Hold a plank for 2 minutes. 💪" },
    { id: 4, task: "Study for 30 minutes. 📖" },
    { id: 5, task: "Read 10 pages of a book. 📚" },
    { id: 6, task: "Learn 5 new words in a foreign language. 🌍" },
    { id: 7, task: "Organize your workspace. 🛠️" },
    { id: 8, task: "Write down 3 goals for the week. 📝" },
    { id: 9, task: "Spend 15 minutes planning your day. ⏰" },
    { id: 10, task: "Do 20 push-ups. 💪" },
    { id: 11, task: "Meditate for 10 minutes. 🧘‍♂️" },
    { id: 12, task: "Drink 8 glasses of water today. 💧" },
    { id: 13, task: "Take a 30-minute walk. 🚶‍♀️" },
    { id: 14, task: "Write a gratitude journal entry. ✍️" },
    { id: 15, task: "Try a new recipe. 🍳" },
    { id: 16, task: "Call a friend you haven’t spoken to in a while. 📞" },
    { id: 17, task: "Clean your room. 🧹" },
    { id: 18, task: "Do 15 squats. 🏋️‍♀️" },
    { id: 19, task: "Watch a documentary. 🎥" },
    { id: 20, task: "Learn a new dance move. 💃" },
    { id: 21, task: "Write a poem. ✍️" },
    { id: 22, task: "Try drawing something. 🎨" },
    { id: 23, task: "Do 10 burpees. 🏋️‍♂️" },
    { id: 24, task: "Take a nap for 20 minutes. 😴" },
    { id: 25, task: "Compliment 3 people today. 😊" },
];

// Generate a random challenge and display it
function generateRandomChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const randomChallenge = challenges[randomIndex];
    const challengeDisplay = document.getElementById('challenge-display');
    challengeDisplay.innerText = randomChallenge.task;

    // Add animation
    challengeDisplay.style.animation = 'fadeIn 1s ease-in-out';
}

// Navigate back to the homepage
function goBack() {
    window.location.href = "index.html";
}

// List of pranks
const pranks = [
    "Put a sticky note on someone's mouse sensor. 🖱️",
    "Switch the sugar with salt. 🧂",
    "Wrap someone's desk in aluminum foil. 🎁",
    "Change the language on their phone. 📱",
    "Put googly eyes on everything in the fridge. 👀",
    "Hide their favorite pen. ✏️",
    "Set all their clocks forward by 10 minutes. ⏰",
    "Replace their desktop wallpaper with a funny meme. 😂",
    "Put tape over the TV remote sensor. 📺",
    "Fill their shoes with confetti. 🎉",
    "Put a fake spider in their drawer. 🕷️",
    "Switch their coffee with decaf. ☕",
    "Hide their phone in a cereal box. 📦",
    "Put a 'Kick Me' sign on their back. 🦶",
    "Replace their shampoo with water. 🚿",
];

// Generate a random prank
function generateRandomPrank() {
    const randomIndex = Math.floor(Math.random() * pranks.length);
    const randomPrank = pranks[randomIndex];
    const prankText = document.getElementById('prank-text');
    prankText.innerText = randomPrank;

    // Add animation
    prankText.style.animation = 'fadeIn 1s ease-in-out';
}

// Navigate to 2-4 Player Mode
function goToPlayerMode() {
    window.location.href = "player-mode.html";
}

// Navigate to Prank Mode
function goToPrankMode() {
    window.location.href = "prank-mode.html";
}

// Navigate to Random Challenge Page
function goToChallengePage() {
    window.location.href = "challenge.html";
}

// Navigate to Prank Mode Page
function goToPrankPage() {
    window.location.href = "prank-mode.html";
}

// Navigate to 2-4 Player Mode Page
function goToPlayerMode() {
    window.location.href = "player-mode.html";
}

// Generate a random challenge and display it
function generateRandomChallenge() {
    const challenges = [
        "Run 10 miles today. 🏃‍♂️",
        "Do 50 jumping jacks. 🤸‍♀️",
        "Hold a plank for 2 minutes. 💪",
        "Study for 30 minutes. 📖",
        "Read 10 pages of a book. 📚",
    ];
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const randomChallenge = challenges[randomIndex];
    const challengeDisplay = document.getElementById('challenge-display');
    challengeDisplay.innerText = randomChallenge;
}

// Generate a random prank and display it
function generateRandomPrank() {
    const pranks = [
        "Put a sticky note on someone's mouse sensor. 🖱️",
        "Switch the sugar with salt. 🧂",
        "Wrap someone's desk in aluminum foil. 🎁",
        "Change the language on their phone. 📱",
        "Put googly eyes on everything in the fridge. 👀",
    ];
    const randomIndex = Math.floor(Math.random() * pranks.length);
    const randomPrank = pranks[randomIndex];
    const prankText = document.getElementById('prank-text');
    prankText.innerText = randomPrank;
}

// Navigate back to the homepage
function goBack() {
    window.location.href = "index.html";
}

// Start the game with selected number of players
function startGame(playerCount) {
    const playersDiv = document.getElementById('players');
    playersDiv.innerHTML = ""; // Clear previous players
    document.getElementById('player-challenges').style.display = "block";

    for (let i = 1; i <= playerCount; i++) {
        const challenges = [
            "Run 10 miles today. 🏃‍♂️",
            "Do 50 jumping jacks. 🤸‍♀️",
            "Hold a plank for 2 minutes. 💪",
            "Study for 30 minutes. 📖",
            "Read 10 pages of a book. 📚",
        ];
        const randomIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomIndex];

        const playerDiv = document.createElement('div');
        playerDiv.className = "player";
        playerDiv.innerHTML = `<span>Player ${i}: ${challenge}</span> <button onclick="markCompleted(this)">✅ Completed</button>`;
        playersDiv.appendChild(playerDiv);
    }
}

// Mark a challenge as completed
function markCompleted(button) {
    button.parentElement.style.textDecoration = "line-through";
    button.disabled = true;
}