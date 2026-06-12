// Make functions globally available for inline onclick
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.displayCart = displayCart;


let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add item to cart
function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: parseFloat(price),
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();   // refresh the cart display
}

// Display cart items
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    if (!cartContainer) return;

    cartContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartContainer.innerHTML += `
            <div class="cart-item" >
                <h2>${item.name}</h2>
                <p>£${item.price} × ${item.quantity} = £${itemTotal.toFixed(2)}</p>
                <button onclick="removeFromCart(${index})" >Remove</button>
            </div>
            <br>
        `;
    });

    cartContainer.innerHTML += `<h2>Total: £${total.toFixed(2)}</h2>`;
}


