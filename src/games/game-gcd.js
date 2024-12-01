/* eslint-disable import/extensions */
import gameLogic from '../index.js';
import getRandomNumber from '../random.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGameGCD = () => {
  const randomNumberOne = getRandomNumber(1, 100);
  const randomNumberTwo = getRandomNumber(1, 100);
  const lowestNumber = randomNumberOne > randomNumberTwo ? randomNumberTwo : randomNumberOne;
  let maxDivisor = '1';

  for (let i = 2; i <= lowestNumber; i += 1) {
    if (randomNumberOne % i === 0 && randomNumberTwo % i === 0) {
      maxDivisor = String(i);
    }
  }

  const question = `${randomNumberOne} ${randomNumberTwo}`;
  return [question, maxDivisor];
};

const startGameGCD = () => gameLogic(description, getGameGCD);

export default startGameGCD;
