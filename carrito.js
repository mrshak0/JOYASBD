document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const cartIcon = document.getElementById('cart-icon');
    const cart = document.getElementById('cart');

    let cartItems = [];
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseInt(button.getAttribute('data-price'));

            addToCart(name, price);
        });
    });

    function addToCart(name, price) {
        const item = { name, price };
        cartItems.push(item);
        total += price;

        renderCart();
    }

    function renderCart() {
       
      cartItemsContainer.innerHTML = ''; 

cartItems.forEach(item => {
const cartItem = document.createElement('li');
cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

const itemName = document.createElement('span');
itemName.textContent = item.name;

const itemPrice = document.createElement('span');
itemPrice.textContent = `$${item.price}`;

const removeButton = document.createElement('button');
removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
removeButton.textContent = 'Eliminar';
removeButton.addEventListener('click', () => removeFromCart(item));

cartItem.appendChild(itemName);
cartItem.appendChild(itemPrice);
cartItem.appendChild(removeButton);

cartItemsContainer.appendChild(cartItem);
});

cartTotal.textContent = `$${total}`;
cartCount.textContent = cartItems.length.toString();
updateCartVisibility();
}

function removeFromCart(item) {
const index = cartItems.indexOf(item);
if (index > -1) {
total -= item.price;
cartItems.splice(index, 1);
renderCart();
}
}

function updateCartVisibility() {
if (cartItems.length > 0) {
cart.style.display = 'block';
} else {
cart.style.display = 'none';
}
}


cartIcon.addEventListener('click', () => {
if (cart.style.display === 'block') {
cart.style.display = 'none';
} else {
cart.style.display = 'block';
}
});
});