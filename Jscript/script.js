//Courasel
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

// Search-bar 
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

