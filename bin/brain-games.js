#!/usr/bin/env node


import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');
const name = readlineSync.question('Your answer: ');
console.log('Hello, ', name );