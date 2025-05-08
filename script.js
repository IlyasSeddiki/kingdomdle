let characterOfTheDay = "";

function getTodayIndex(max) {
  const today = new Date();
  const seed = today.getFullYear() * 1000 + today.getMonth() * 50 + today.getDate();
  return seed % max;
}

async function loadCharacterOfTheDay() {
  const res = await fetch('characters.json');
  const characters = await res.json();
  const index = getTodayIndex(characters.length);
  characterOfTheDay = characters[index].toLowerCase();
}

function checkGuess() {
  const input = document.getElementById('guessInput').value.trim().toLowerCase();
  const result = document.getElementById('result');

  if (input === characterOfTheDay) {
    result.innerText = "🎉 Bravo ! Tu as trouvé le personnage du jour !";
    result.style.color = "lightgreen";
  } else {
    result.innerText = "❌ Ce n’est pas le bon personnage. Réessaie !";
    result.style.color = "red";
  }
}

loadCharacterOfTheDay();
