import getGameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameEven = () => {
  const number = getRandomNumber(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

const startGameEven = () => getGameLogic(description, getGameEven);

export default startGameEven;
