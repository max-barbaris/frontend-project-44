import getGameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What number is missing in the progression?';

const generateProgression = (firstNumber, progressionStep, progressionLength) => {
  const progression = [];
  progression[0] = firstNumber;
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }
  return progression;
};

const getGameProgression = () => {
  const firstNumber = getRandomNumber(1, 100);
  const progressionStep = getRandomNumber(1, 10);
  const progressionLength = 10;
  const progression = generateProgression(firstNumber, progressionStep, progressionLength);
  const randomIndex = getRandomNumber(0, 9);
  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const startGameProgression = () => getGameLogic(description, getGameProgression);

export default startGameProgression;
