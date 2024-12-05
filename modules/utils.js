export function showMessage(message) {
  document.getElementById('messages').textContent = message;
}

export function updateStats(pet) {
  document.getElementById('hunger').textContent = pet.hunger;
  document.getElementById('happiness').textContent = pet.happiness;
  document.getElementById('energy').textContent = pet.energy;
}

export function sleepTextAnimation() {
  let zCounter = 0;
  showMessage('💤  ');
  const sleepInterval = setInterval(() => {
    if (zCounter < 4) {
      showMessage('💤  '.repeat(zCounter + 1));
      zCounter++;
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(sleepInterval);
  }, 5000);
}

export function lifeGestion(pet) {
  setInterval(() => {
    if (!pet.sleeping) {
      pet.hunger = Math.max(0, pet.hunger - 5);
      pet.happiness = Math.max(0, pet.happiness - 5);
      pet.energy = Math.max(0, pet.energy - 5);
      updateStats(pet);

      if (pet.hunger < 20) {
        showMessage('Ton animal a très faim ! 😢');
      } else if (pet.happiness < 20) {
        showMessage("Ton animal s'ennuie ! 😕");
      } else if (pet.energy < 20) {
        showMessage('Ton animal est fatigué ! 😴');
      }
    }
  }, 5000);
}
