
import readlineSync from 'readline-sync';

const gcd = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const playGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(Hello, ${name}!);
    console.log('Find the greatest common divisor of given numbers.');

    let correctAnswersCount = 0;

    for (let i = 0; i < 3; i++) {
        const num1 = getRandomInt(1, 100);
        const num2 = getRandomInt(1, 100);
        const correctAnswer = gcd(num1, num2);

        const userAnswer = readlineSync.question(Question: ${num1} ${num2}\nYour answer: );

        if (parseInt(userAnswer, 10) === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
            console.log('${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.);
            console.log(Let's try again, ${name}!);
            return;
        }
    }

    console.log(Congratulations, ${name}!);
};

playGame();

brainGcd();