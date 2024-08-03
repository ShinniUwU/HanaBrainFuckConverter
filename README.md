
# Hana's Brainfuck Converter

A Node.js application to convert strings to Brainfuck code and decode Brainfuck code back to strings. The application features a menu interface and uses `chalk` for styled terminal output.

## Features

- Encode strings into Brainfuck code
- Decode Brainfuck code into strings
- Styled terminal output with `chalk`

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x or later)

## Installation

1. **Clone the repository or download the code:**

   ```bash
   git clone https://github.com/your-username/brainfuck-converter.git
   cd brainfuck-converter
   ```

2. **Install the required dependencies:**

   ```bash
   npm install
   ```

## Running the Application

### Using ES Modules

If your file is named with the `.mjs` extension:

1. **Run the application:**

   ```bash
   node index.mjs
   ```

### Using CommonJS (with `.js` extension)

If you prefer to use the `.js` extension, ensure `"type": "module"` is added to `package.json`. Here’s how to set it up:

1. **Update `package.json`:**

   Make sure your `package.json` contains:

   ```json
   {
     "name": "brainfuck-generator",
     "version": "1.0.0",
     "main": "index.js",
     "type": "module",
     "scripts": {
       "start": "node index.js"
     },
     "dependencies": {
       "chalk": "^5.0.0"
     }
   }
   ```

2. **Run the application:**

   ```bash
   npm start
   ```

## Usage

When you run the application, a menu will be displayed:

1. **Choose an option:**
   - **1**: Encode a string to Brainfuck
   - **2**: Decode Brainfuck to string
   - **3**: Exit the application

2. **Follow the prompts** to input your string or Brainfuck code based on your choice.

## Example

### Encoding

- **Input**: `"Hello"`
- **Output**: A Brainfuck code sequence that outputs `Hello`.

### Decoding

- **Input**: Brainfuck code like `+[----->+++<]>.>+.+++++++..+++.`
- **Output**: The string decoded from the Brainfuck code.

## Troubleshooting

- **Error [ERR_REQUIRE_ESM]**: Ensure you are using the correct file extension (`.mjs`) or have set `"type": "module"` in `package.json` if using `.js`.

- **SyntaxError: Cannot use import statement outside a module**: Check that your Node.js version supports ES Modules or that you have set up the project to use ES Modules correctly.
