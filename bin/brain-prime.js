#!/usr/bin/env node
import readlineSync from 'readline-sync'

const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

const playGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1
    const correctAnswer = isPrime(number) ? 'yes' : 'no'

    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `).toLowerCase()

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

playGame()
