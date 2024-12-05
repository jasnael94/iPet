import { lifeGestion } from './modules/utils.js';
import {
  pet,
  feedTheAnimal,
  playWithTheAnimal,
  makeTheAnimalSleep,
} from './modules/main.js';

lifeGestion(pet);


window.feedTheAnimal = feedTheAnimal;
window.playWithTheAnimal = playWithTheAnimal;
window.makeTheAnimalSleep = makeTheAnimalSleep;
