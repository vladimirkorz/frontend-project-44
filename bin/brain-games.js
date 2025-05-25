#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

if (process.argv[1] === import.meta.url) {
  greet();
}

export default greet;