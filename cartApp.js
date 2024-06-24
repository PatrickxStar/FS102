document.addEventListener('DOMContentLoaded', () => {
    initializeCart();
  
    const addItemForm = document.getElementById('addItemForm');
    const displayCartButton = document.getElementById('displayCart');
    const cartItemsTable = document.getElementById('cartItems');
  
    addItemForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const itemName = document.getElementById('itemName').value;
      const itemPrice = parseFloat(document.getElementById('itemPrice').value);
      addItem({ id: Date.now(), name: itemName, price: itemPrice });
      addItemForm.reset();
      displayItems();
    });
  
    displayCartButton.addEventListener('click', () => {
      displayItems();
    });
  
    // Event delegation for remove buttons
    cartItemsTable.addEventListener('click', (event) => {
      if (event.target && event.target.classList.contains('remove-btn')) {
        const itemId = event.target.dataset.itemId;
        removeItem(itemId);
        displayItems();
      }
    });
  
    function initializeCart() {
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
      }
    }
  
    function addItem(item) {
      const cart = JSON.parse(localStorage.getItem('cart'));
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  
    function removeItem(itemId) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      cart = cart.filter(item => item.id !== parseInt(itemId));
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  
    function displayItems() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cartItemsTable.innerHTML = ''; // Clear the table before re-rendering
      cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>$${item.price.toFixed(2)}</td>
          <td><button class="remove-btn" data-item-id="${item.id}">Remove</button></td>
        `;
        cartItemsTable.appendChild(row);
      });
    }
  });
  