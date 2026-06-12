let slides = document.querySelectorAll(".banner-slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

setInterval(nextSlide, 4000);

// Search-bar functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        
        if (query === '') {
            alert("Please enter a search term!");
            return;
        }

        // Simple keyword-based navigation (you can expand this)
        if (query.includes('home')) {
            window.location.href = 'index.html';
        } 
        else if (query.includes('shop')) {
            window.location.href = 'shop.html';
        } 
        else if (query.includes('event') || query.includes('news')) {
            window.location.href = 'event.html';
        } 
        else if (query.includes('team') || 
        query.includes('players') || 
        query.includes('Highlights') || 
        query.includes('games') ){
            window.location.href = 'teamovr.html';
        } 
        else if (query.includes('about')) {
            window.location.href = 'about.html';
        } 
        else if (query.includes('cart') || query.includes('basket')) {
            window.location.href = 'cart.html';
        } 
        else if (query.includes('login')) {
            window.location.href = 'login.html';
        } 
        else if (query.includes('signup') || query.includes('sign-up')) {
            window.location.href = 'signup.html';
        } 
        else if (query.includes('mednasah') || 
        query.includes('indominator') || 
        query.includes('ninja') || 
        query.includes('son') || 
        query.includes('sam')){
            window.location.href = 'player.html';
        } 
        else {
            // Default: go to shop with alert
            alert("Can't find the requested search");
            // window.location.href = 'shop.html';
        }
    }

    // Search on button click
    searchBtn.addEventListener('click', performSearch);

    // Search on Enter key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

// Login Presence check
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.form');
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    const loginBtn = loginForm.querySelector('button');

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior

        let valid = true;
        let message = '';

        // Presence check
        if (!emailInput.value.trim()) {
            message += "Enter a valid Email.\n";
            valid = false;
        }
        if (!passwordInput.value.trim()) {
            message += "Enter a valid Password.\n";
            valid = false;
        }

        // Basic email format check
        if (emailInput.value.trim() && !emailInput.value.includes('@')) {
            message += "Please enter a valid email address.\n";
            valid = false;
        }

        if (!valid) {
            alert(message);
        } else {
            alert("Login successful! (Demo - no real backend)");
            window.location.href = 'index.html';
        }
    });
});
    
//Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: price,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart!`);
}

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
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>£${item.price} × ${item.quantity} = £${itemTotal}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    cartContainer.innerHTML += `<h2>Total: £${total}</h2>`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Make functions available globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.displayCart = displayCart;
