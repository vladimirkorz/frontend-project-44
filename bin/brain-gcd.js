#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i++) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = gcd(num1, num2);

    const userAnswer = readlineSync.question(`Question: ${num1} ${num2}\nYour answer: `);

    if (parseInt(userAnswer, 10) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

startGame();