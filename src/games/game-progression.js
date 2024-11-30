/* eslint-disable import/extensions */
import gameLogic from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min));
const description = 'What number is missing in the progression?';

const getGameProgression = () => {
  const progression = [];
  progression[0] = getRandomNumber(1, 100);
  const progressionStep = getRandomNumber(1, 10);
  const randomIndex = getRandomNumber(1, 10);

  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGameProgression = () => gameLogic(description, getGameProgression);

export default startGameProgression;
