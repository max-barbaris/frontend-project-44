import getGameLogic from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 'Error. Wrong operator';
  }
};

const getGameCalc = () => {
  const operators = ['+', '-', '*'];
  const operatorsCount = operators.length - 1;
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operatorsCount)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(number1, number2, operator));
  return [question, answer];
};

const startGameCalc = () => getGameLogic(description, getGameCalc);

export default startGameCalc;
