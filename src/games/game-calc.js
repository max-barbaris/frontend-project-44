/* eslint-disable import/extensions */
/* eslint-disable no-console */
import gameLogic from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const description = 'What is the result of the expression?';

const calculation = (randomNumberOne, randomNumberTwo, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      result = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      result = randomNumberOne * randomNumberTwo;
      break;
    default:
  }
  return result;
};

const getGameCalc = () => {
  const operators = ['+', '-', '*'];
  const randomNumberOne = getRandomNumber(1, 100);
  const randomNumberTwo = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, 2)];
  const question = `${randomNumberOne} ${operator} ${randomNumberTwo}`;
  const correctAnswer = String(calculation(randomNumberOne, randomNumberTwo, operator));
  return [question, correctAnswer];
};

const startGameCalc = () => gameLogic(description, getGameCalc);

export default startGameCalc;
