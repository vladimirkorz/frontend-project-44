#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

if (import.meta.url.endsWith('brain-games.js') || 
    process.argv[1].replace(/\\/g, '/').includes('brain-games.js')) {
  greet();
}

console.log('Debug:', process.argv[1]);

export default greet;