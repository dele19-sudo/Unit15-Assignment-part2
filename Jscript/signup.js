document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('.form');
    const usernameInput = signupForm.querySelector('input[type="text"]');
    const emailInput = signupForm.querySelector('input[type="email"]');
    const passwordInput = signupForm.querySelectorAll('input[type="password"]')[0];
    const confirmPasswordInput = signupForm.querySelectorAll('input[type="password"]')[1];
    const signupBtn = signupForm.querySelector('button');

    signupBtn.addEventListener('click', function(e) {
        e.preventDefault();

        let valid = true;
        let message = '';

        // Presence checks
        if (!usernameInput.value.trim()) {
            message += "Username is required.\n";
            valid = false;
        }
        if (!emailInput.value.trim()) {
            message += "Email is required.\n";
            valid = false;
        }
        if (!passwordInput.value.trim()) {
            message += "Password is required.\n";
            valid = false;
        }
        if (!confirmPasswordInput.value.trim()) {
            message += "Please confirm your password.\n";
            valid = false;
        }

        // Email format
        if (emailInput.value.trim() && !emailInput.value.includes('@')) {
            message += "Please enter a valid email address.\n";
            valid = false;
        }

        // Password match
        if (passwordInput.value !== confirmPasswordInput.value) {
            message += "Passwords do not match.\n";
            valid = false;
        }

        // Password length
        if (passwordInput.value.trim().length < 6) {
            message += "Password must be at least 6 characters.\n";
            valid = false;
        }

        if (!valid) {
            alert(message);
        } else {
            alert("Account created successfully! (Demo)");
            window.location.href = 'login.html';
        }
    });
});