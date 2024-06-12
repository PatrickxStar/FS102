let Value = [1, 2, 3];
 function getFirstValue(array) {
    return array[0];
 }

 console.log(getFirstValue(Value));

 let fruit = ['apple', 'kiwi', 'pear'];

 function getFirstFruit(array) {
    return array[0];
 }
 console.log(getFirstFruit(fruit));

 let incrementItems = [1, 2, 3, 4, 5, 6,];
    for (let i = 0; i < incrementItems.length; i++) {
        incrementItems[i] += 1;
 }
 console.log(incrementItems);

let turn = ['a', 'b', 'c'];

function rotate(array) {
    let firstElement = array.shift();
    array.push(firstElement);
    return array;
}
rotate(turn);
console.log(turn);
