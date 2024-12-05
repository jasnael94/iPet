import { showMessage, updateStats, sleepTextAnimation } from './utils.js';

export const pet = {
  hunger: 100,
  happiness: 100,
  energy: 100,
  sleeping: false,
  emojis: ['🐱', '🐶', '🐰', '🐼', '🐨', '🦊'],
  currentEmoji: 0,
};

export function feedTheAnimal() {
  if (pet.sleeping) {
    showMessage('Chut! Ton animal dort! 😴');
    return;
  }

  document.getElementById('pet').classList.add('jump');
  setTimeout(
    () => document.getElementById('pet').classList.remove('jump'),
    500
  );

  pet.hunger = Math.min(100, pet.hunger + 30);
  pet.energy = Math.max(0, pet.energy - 10);
  showMessage('Miam miam ! 😋');
  updateStats(pet);
}

export function playWithTheAnimal() {
  if (pet.sleeping) {
    showMessage('Ton animal dort profondément ! 💤');
    return;
  }

  if (pet.energy < 20) {
    showMessage('Ton animal est trop fatigué pour jouer ! 😫');
    return;
  }

  document.getElementById('pet').classList.add('shake');
  setTimeout(
    () => document.getElementById('pet').classList.remove('shake'),
    500
  );

  pet.happiness = Math.min(100, pet.happiness + 30);
  pet.energy = Math.max(0, pet.energy - 20);
  pet.hunger = Math.max(0, pet.hunger - 20);
  showMessage("Youpi ! C'est trop fun ! 🎉");
  updateStats(pet);
}

export function makeTheAnimalSleep() {
  document.getElementById('sleep-button').disabled = true;
  pet.sleeping = true;
  document.getElementById('pet').style.transform = 'rotate(90deg)';
  pet.energy = Math.min(100, pet.energy + 50);
  sleepTextAnimation();
  updateStats(pet);

  setTimeout(() => {
    document.getElementById('sleep-button').disabled = false;
    pet.sleeping = false;
    document.getElementById('pet').style.transform = 'rotate(0deg)';
    showMessage('Ton animal se réveille ! 🌞');
    updateStats(pet);
  }, 5000);
}

export function selectAnotherAnimal() {
  pet.currentEmoji = (pet.currentEmoji + 1) % pet.emojis.length;
  document.getElementById('pet').textContent = pet.emojis[pet.currentEmoji];
}

updateStats(pet);

document.getElementById('pet').onclick = selectAnotherAnimal;
