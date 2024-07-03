const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

const numbers = [...numbers1, ...numbers2];

const square = (number) => number * number;

let squares = numbers.map(square); //Take a look again

const isEven = number => {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

let evenSquares = squares.filter(isEven);

const [firstEvenSquare, secondEvenSquare] = evenSquares;

console.log(`Original numbers array: ${numbers}`);
console.log(`Squares array: ${squares}`);
console.log(`Even squares array: ${evenSquares}`);
console.log(`First even square: ${firstEvenSquare}, Second even square: ${secondEvenSquare}`);