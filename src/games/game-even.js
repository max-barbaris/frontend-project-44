/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const countRounds = 3;

const startGameEven = () => {
  console.log('Welcone to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < countRounds; i += 1) {
    const number = getRandomNumber(1, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGameEven;
