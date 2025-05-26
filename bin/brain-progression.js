#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const length = Math.floor(Math.random() * 6) + 5; // 5-10 чисел
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const hiddenIndex = Math.floor(Math.random() * length);
    
    const progression = generateProgression(start, step, length);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    
    const question = `Question: ${progression.join(' ')}`;
    const userAnswer = readlineSync.question(`${question}\nYour answer: `);

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();