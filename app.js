// ==========================================
// GEARSDLE - GAME DATA
// ==========================================

const gameData = {
    classic: [
        { name: "Marcus Fenix", faction: "COG", species: "Human", appearance: "Gears 1", status: "Alive" },
        { name: "Dominic Santiago", faction: "COG", species: "Human", appearance: "Gears 1", status: "Deceased" },
        { name: "Damon Baird", faction: "COG", species: "Human", appearance: "Gears 1", status: "Alive" },
        { name: "Augustus Cole", faction: "COG", species: "Human", appearance: "Gears 1", status: "Alive" },
        { name: "General RAAM", faction: "Locust", species: "Locust", appearance: "Gears 1", status: "Deceased" },
        { name: "Skorge", faction: "Locust", species: "Locust", appearance: "Gears 2", status: "Deceased" },
        { name: "Kait Diaz", faction: "COG", species: "Human", appearance: "Gears 4", status: "Alive" }
    ],
    quote: [
        { text: "Look at all that juice!", answer: "Augustus Cole" },
        { text: "Welcome to the Delta Squad, son.", answer: "Marcus Fenix" },
        { text: "Suck it, scaleface!", answer: "Damon Baird" },
        { text: "Never thought it would end like this, huh Maria?", answer: "Dominic Santiago" }
    ],
    weapon: [
        { name: "Lancer", type: "Rifle", ammo: "Bullet", execution: "Chainsaw" },
        { name: "Gnasher", type: "Shotgun", ammo: "Shell", execution: "Bludgeon" },
        { name: "Longshot", type: "Sniper", ammo: "Precision", execution: "Headshot" },
        { name: "Torque Bow", type: "Heavy", ammo: "Explosive Arrow", execution: "Impale" }
    ]
};

// ==========================================
// GAME STATE MANAGEMENT
// ==========================================

let currentMode = 'classic';
let secretAnswer = null;

// Starts a new game based on selected mode
function initGame() {
    const pool = gameData[currentMode];
    // Pick a random secret item from the selected category pool
    secretAnswer = pool[Math.floor(Math.random() * pool.length)];
    
    const promptDiv = document.getElementById("game-prompt");
    const feedbackGrid = document.getElementById("feedback-grid");
    feedbackGrid.innerHTML = ""; // Clear old entries
    
    if (currentMode === 'classic') {
        promptDiv.innerHTML = "<strong>Classic Mode:</strong> Guess the hidden character! (e.g., Marcus Fenix, General RAAM)";
    } else if (currentMode === 'quote') {
        promptDiv.innerHTML = `<strong>Quote Mode:</strong> Who said: <br><br><em>"${secretAnswer.text}"</em>`;
    } else if (currentMode === 'weapon') {
        promptDiv.innerHTML = "<strong>Weapon Mode:</strong> Guess the weapon! (e.g., Lancer, Gnasher)";
    }
}

// Switches between navigation tabs
function setMode(mode) {
    currentMode = mode;
    
    // Manage UI active classes
    document.querySelectorAll(".mode-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    
    initGame();
}

// ==========================================
// GUESS PROCESSING & FEEDBACK
// ==========================================

function checkGuess() {
    const inputEl = document.getElementById("guess-input");
    const userGuess = inputEl.value.trim().toLowerCase();
    const feedbackGrid = document.getElementById("feedback-grid");
    
    if (!userGuess) return;
    
    // Find the item matching user input
    const matchPool = currentMode === 'quote' ? gameData['classic'] : gameData[currentMode];
    const itemFound = matchPool.find(item => item.name?.toLowerCase() === userGuess);

    // Dynamic Text Box validation
    if (currentMode !== 'quote' && !itemFound) {
        alert("Item not found in our database! Try names like Marcus Fenix, General RAAM, Lancer, or Gnasher.");
        return;
    }

    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "center";
    row.style.marginTop = "10px";

    if (currentMode === 'classic') {
        // Evaluate attributes: Name, Faction, Species, First Appearance, Status
        createTile(row, itemFound.name, itemFound.name === secretAnswer.name);
        createTile(row, itemFound.faction, itemFound.faction === secretAnswer.faction);
        createTile(row, itemFound.species, itemFound.species === secretAnswer.species);
        createTile(row, itemFound.appearance, itemFound.appearance === secretAnswer.appearance);
        createTile(row, itemFound.status, itemFound.status === secretAnswer.status);
        
    } else if (currentMode === 'quote') {
        // Exact name checking for quote mode
        const isCorrect = userGuess === secretAnswer.answer.toLowerCase();
        createTile(row, inputEl.value, isCorrect);
        
    } else if (currentMode === 'weapon') {
        // Evaluate weapon items
        createTile(row, itemFound.name, itemFound.name === secretAnswer.name);
        createTile(row, itemFound.type, itemFound.type === secretAnswer.type);
        createTile(row, itemFound.ammo, itemFound.ammo === secretAnswer.ammo);
        createTile(row, itemFound.execution, itemFound.execution === secretAnswer.execution);
    }

    feedbackGrid.prepend(row);
    inputEl.value = ""; // Reset input field

    // Check Win State
    if (userGuess === (secretAnswer.name || secretAnswer.answer).toLowerCase()) {
        setTimeout(() => alert("💥 GRINDING SUCCESS! You guessed it right!"), 200);
    }
}

// Helper utility to make grid grid squares
function createTile(row, text, isCorrect) {
    const tile = document.createElement("div");
    tile.innerText = text;
    tile.style.padding = "10px";
    tile.style.margin = "2px";
    tile.style.border = "1px solid #444";
    tile.style.minWidth = "80px";
    tile.className = isCorrect ? "correct" : "incorrect";
    row.appendChild(tile);
}

// Initialize the program on window boot
window.onload = initGame;
// ==========================================
// AUTOCOMPLETE SUGGESTIONS LOGIC
// ==========================================

function showSuggestions() {
    const input = document.getElementById("guess-input");
    const filter = input.value.toLowerCase();
    const listContainer = document.getElementById("autocomplete-list");
    
    // Clear any existing suggestions
    listContainer.innerHTML = "";
    
    if (!filter) return false;

    // Get the correct pool of choices based on active mode
    const matchPool = currentMode === 'quote' ? gameData['classic'] : gameData[currentMode];
    
    // Filter items matching what the user typed
    matchPool.forEach(item => {
        if (item.name.toLowerCase().includes(filter)) {
            const suggestionItem = document.createElement("div");
            suggestionItem.innerHTML = item.name;
            
            // When user clicks a suggestion, fill input and clear dropdown
            suggestionItem.addEventListener("click", function() {
                input.value = this.innerText;
                listContainer.innerHTML = "";
            });
            
            listContainer.appendChild(suggestionItem);
        }
    });
}

// Close the autocomplete dropdown if the user clicks anywhere else on the screen
document.addEventListener("click", function (e) {
    if (e.target.id !== "guess-input") {
        document.getElementById("autocomplete-list").innerHTML = "";
    }
});
