let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 
    'salsa', 'coffee'];
    shoppingList.push('fruit loops'); 
    // can also do shoppingList[5] = 'fruit loops';
    shoppingList[4] = 'fair trade coffee';
    shoppingList.splice(2, 2, 'rice', 'beans'); //Replacing 2nd index with 2 new words

//let shoppingCart = shoppingList.join(', '); Making it into a list from left right

let shoppingCart = []; //shoppingList.slice(); making cart duplicate to List
    shoppingList.pop();
    shoppingCart.push('fruit loops');
    shoppingList.shift('pop tarts');
    shoppingCart.push('pop tarts');
    //item: This is a parameter that represents each element in the shoppingList array during iteration.
//=>: This is the arrow function syntax, which is a shorter way to define a function in JavaScript.
//shoppingCart.push(item): This line of code is inside the callback function. It adds the current item from the shoppingList array to the shoppingCart array.
    while (shoppingCart.length < shoppingList.length) {
        shoppingList.forEach(item => { 
            shoppingCart.push(item);
        });
    shoppingCart.sort();
    shoppingCart.reverse();
    let shoppingCartString = shoppingCart.join(', ');
console.log(shoppingCartString);
    }