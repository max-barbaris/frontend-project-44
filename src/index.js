/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const gameLogic = (description, gameData) => {
  console.log('Welcone to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const numberOfRounds = 3;

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
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

export default gameLogic;
