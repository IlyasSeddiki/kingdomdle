let characterOfTheDay = "sora";
let spellOfTheDay = "firaga";

// === Navigation entre jeux ===
function showGame(id) {
  document.querySelectorAll('.game-section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');

  if (id === "quote") loadQuote();
}

// === KHdle ===
function checkKHdle() {
  const guess = document.getElementById("guessInput").value.trim().toLowerCase();
  const result = document.getElementById("result");
  result.innerText = (guess === characterOfTheDay)
    ? "✅ Bien joué !"
    : "❌ Mauvais personnage.";
}

// === Spelldle ===
function checkSpell() {
  const guess = document.getElementById("spellInput").value.trim().toLowerCase();
  const result = document.getElementById("spellResult");
  result.innerText = (guess === spellOfTheDay)
    ? "✨ Sort correct !"
    : "⚠️ Essayez encore.";
}

// === Quote Game ===
const quotes = [
  { text: "The heart may be weak, and sometimes it may even give in. But there's a light that never goes out!", character: "Sora" },
  { text: "Got it memorized?", character: "Axel" },
  { text: "One who knows nothing can understand nothing.", character: "Ansem" },
  { text: "Thinking of you, wherever you are.", character: "Kairi" },
  { text: "May your heart be your guiding key.", character: "Yen Sid" },
  { text: "I’m me! Nobody else!", character: "Roxas" },
  { text: "Darkness... Now, you weak-hearted fools... Witness real power!", character: "Ansem" },
  { text: "I’m already half Xehanort!", character: "Terra" },
  { text: "Looks like my summer vacation is over.", character: "Roxas" },
  { text: "Kingdom Hearts is light!", character: "Sora" }
];

let currentQuote = {};

function loadQuote() {
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteText").innerText = `"${currentQuote.text}"`;
  document.getElementById("quoteResult").innerText = "";
  document.getElementById("quoteGuess").value = "";
}

function checkQuote() {
  const guess = document.getElementById("quoteGuess").value.trim().toLowerCase();
  const result = document.getElementById("quoteResult");
  if (guess === currentQuote.character.toLowerCase()) {
    result.innerText = "✅ Bonne réponse !";
  } else {
    result.innerText = `❌ Mauvaise réponse. C'était ${currentQuote.character}.`;
  }
  setTimeout(loadQuote, 3000);
}

// Initialiser quote si c'est le premier affiché
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("quote").classList.contains("active")) {
    loadQuote();
  }
});
