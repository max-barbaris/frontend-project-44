/* eslint-disable no-console */
import gameLogic from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameEven = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGameEven = () => gameLogic(description, getGameEven);

export default startGameEven;
