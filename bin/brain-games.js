import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Запуск только при прямом вызове
if (process.argv[1].includes('brain-games.js')) {
  greet();
}
export default greet;