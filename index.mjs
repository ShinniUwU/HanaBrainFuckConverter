// index.mjs

import readline from 'readline';
import chalk from 'chalk';

// Function to generate Brainfuck code from a string
const generateBrainfuck = (input) => {
  let brainfuckCode = '';
  let memory = Array(30000).fill(0); // Brainfuck memory size
  let pointer = 0;

  for (const char of input) {
    const charCode = char.charCodeAt(0);
    let diff = charCode - memory[pointer];

    if (diff > 0) {
      brainfuckCode += '+'.repeat(diff);
    } else if (diff < 0) {
      brainfuckCode += '-'.repeat(-diff);
    }

    brainfuckCode += '.';
    memory[pointer] = charCode;
  }

  return brainfuckCode;
};

// Function to decode Brainfuck code to a string
const decodeBrainfuck = (code) => {
  let memory = Array(30000).fill(0);
  let pointer = 0;
  let result = '';
  let codePointer = 0;

  while (codePointer < code.length) {
    switch (code[codePointer]) {
      case '>':
        pointer++;
        break;
      case '<':
        pointer--;
        break;
      case '+':
        memory[pointer]++;
        break;
      case '-':
        memory[pointer]--;
        break;
      case '.':
        result += String.fromCharCode(memory[pointer]);
        break;
      case ',':
        // Input is not handled in this example
        break;
      case '[':
        if (memory[pointer] === 0) {
          let openBrackets = 1;
          while (openBrackets > 0) {
            codePointer++;
            if (code[codePointer] === '[') openBrackets++;
            if (code[codePointer] === ']') openBrackets--;
          }
        }
        break;
      case ']':
        if (memory[pointer] !== 0) {
          let closeBrackets = 1;
          while (closeBrackets > 0) {
            codePointer--;
            if (code[codePointer] === '[') closeBrackets--;
            if (code[codePointer] === ']') closeBrackets++;
          }
        }
        break;
    }
    codePointer++;
  }

  return result;
};

// Menu and Input Handling
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showMenu = () => {
  console.log(chalk.blueBright.bold('=============================='));
  console.log(chalk.greenBright.bold("  Hana's Brainfuck Converter "));
  console.log(chalk.blueBright.bold('=============================='));
  console.log(chalk.cyan('1. Encode a string to Brainfuck'));
  console.log(chalk.cyan('2. Decode Brainfuck to string'));
  console.log(chalk.cyan('3. Exit'));
  console.log(chalk.blueBright.bold('=============================='));
};

const handleMenu = (choice) => {
  switch (choice) {
    case '1':
      rl.question(chalk.yellow('Enter the string to encode: '), (inputString) => {
        console.log(chalk.greenBright.bold('Encoded Brainfuck Code:'));
        console.log(chalk.green(generateBrainfuck(inputString)));
        rl.close();
      });
      break;
    case '2':
      rl.question(chalk.yellow('Enter the Brainfuck code to decode: '), (code) => {
        console.log(chalk.greenBright.bold('Decoded String:'));
        console.log(chalk.green(decodeBrainfuck(code)));
        rl.close();
      });
      break;
    case '3':
      console.log(chalk.red('Exiting the application.'));
      rl.close();
      break;
    default:
      console.log(chalk.red('Invalid choice. Please try again.'));
      showMenu();
      rl.question(chalk.yellow('Enter your choice: '), handleMenu);
      break;
  }
};

// Start the app
showMenu();
rl.question(chalk.yellow('Enter your choice: '), handleMenu);
