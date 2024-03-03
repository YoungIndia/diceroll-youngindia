
const { uuid } = require('uuid');
const { v1 } = require('quick-sort-youngindia');
const { v2 } = require('prime-numbers-youngindia');

// diceRoll.js
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log('Welcome to Dice Rolling Game!');
console.log('Rolling the dice...');
const result = rollDice();
console.log('You rolled a', result);
function printBoard() {
    console.log(('\n---------\n'));
}

module.exports = { printBoard };
