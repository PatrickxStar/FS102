const list = document.getElementById('list');

//Update 'Apples' to 'Granny Smith Apples'
Array.from(list.children).forEach(item => {
    if (item.textContent === 'Apples') {
        item.textContent = 'Granny Smith Apples';
    }
});

//Remove 'Oat Milk' from the list
Array.from(list.children).forEach(item => {
    if (item.textContent === 'Oat Milk') {
        item.remove();
    }
});

//Add an item 'Kombucha'
const newItem = document.createElement('li');
newItem.textContent = 'Kombucha';
list.appendChild(newItem);

//Clear the list and add items from the array
const items = ['protein bars', 'almonds', 'peanut butter'];
list.innerHTML = '';  // Clear the list

items.forEach(itemText => {
    const item = document.createElement('li');
    item.textContent = itemText;
    list.appendChild(item);
});

//Add the class 'important' to the 'almonds' item
Array.from(list.children).forEach(item => {
    if (item.textContent === 'almonds') {
        item.classList.add('important');
    }
});