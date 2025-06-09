#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { randomInt } from 'crypto'
import greetUser from './greet.js'

const isEven = num => num % 2 === 0

const playGame = () => {
  const name = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".')

for (let i = 0; i < 3; i++) {
  const question = randomInt(1, 100)
  console.log(`Question: ${question}`)
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase()
  const correctAnswer = isEven(question) ? 'yes' : 'no'

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    process.exit(1)
  }
  console.log('Correct!')
}

console.log(`Congratulations, ${name}!`)
}

playGame()