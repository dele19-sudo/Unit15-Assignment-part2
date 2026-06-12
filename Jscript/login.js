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