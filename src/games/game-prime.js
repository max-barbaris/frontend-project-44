/* eslint-disable import/extensions */
import gameLogic from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max + 1 - min));
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
};

const getGamePrime = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGamePrime = () => gameLogic(description, getGamePrime);

export default startGamePrime;
