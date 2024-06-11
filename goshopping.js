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
while (shoppingList.length > 0) {
    shoppingCart.push(shoppingList.shift());
    shoppingCart.sort();
    shoppingCart.reverse();
    let shoppingCartString = shoppingCart.join(', ');
console.log(shoppingCartString, shoppingList);
    }