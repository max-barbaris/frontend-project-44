import getGameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const getMaxDivisor = (number1, number2) => {
  const lowestNumber = number1 > number2 ? number2 : number1;
  let maxDivisor = '1';
  for (let i = 2; i <= lowestNumber; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      maxDivisor = String(i);
    }
  }
  return maxDivisor;
};

const getGameGCD = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const maxDivisor = getMaxDivisor(number1, number2);
  return [question, maxDivisor];
};

const startGameGCD = () => getGameLogic(description, getGameGCD);

export default startGameGCD;
