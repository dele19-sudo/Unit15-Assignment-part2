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

// const pages = [
//         { name: "Home", url: "index.html" },
//         { name: "Team", url: "teamovr.html" },
//         { name: "Highlights", url: "teamovr.html" },
//         { name: "shop", url: "shop.html" },
//         { name: "Login", url: "login.html" },
//         { name: "Sign Up", url: "signup.html" },
//         { name: "Player", url: "player.html" },
//         { name: "About", url: "about.html" }

//     ];

//     // Search functionality
//     const searchInput = document.querySelector('.search-container input[type="text"]');
//     const searchContainer = document.querySelector('.search-container');
    
//     if (searchInput) {
//         // Create search results dropdown if it doesn't exist
//         if (!document.querySelector('.search-results')) {
//             const searchResults = document.createElement('div');
//             searchResults.className = 'search-results';
//             searchContainer.insertBefore(searchResults, searchInput.nextSibling);
//         }
        
//         const searchResults = document.querySelector('.search-results');

//         // Handle search input
//         searchInput.addEventListener('input', (e) => {
//             const query = e.target.value.toLowerCase().trim();
            
//             if (query.length === 0) {
//                 searchResults.innerHTML = '';
//                 searchResults.style.display = 'none';
//                 return;
//             }

//             // Filter pages based on search query
//             const filtered = pages.filter(page => 
//                 page.name.toLowerCase().includes(query) || 
//                 page.url.toLowerCase().includes(query)
//             );

//             // Display results
//             if (filtered.length > 0) {
//                 searchResults.innerHTML = filtered.map(page => 
//                     `<a href="${page.url}" class="search-result-item">${page.name}</a>`
//                 ).join('');
//                 searchResults.style.display = 'block';
//             } else {
//                 searchResults.innerHTML = '<div class="search-no-results">No pages found</div>';
//                 searchResults.style.display = 'block';
//             }
//         });

//         // Close search results when clicking outside
//         document.addEventListener('click', (e) => {
//             if (!searchContainer.contains(e.target)) {
//                 searchResults.style.display = 'none';
//             }
//         });

//         // Show results on focus
//         searchInput.addEventListener('focus', () => {
//             if (searchInput.value.trim().length > 0) {
//                 searchResults.style.display = 'block';
//             }
//         });
//     }