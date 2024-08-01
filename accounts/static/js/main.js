document.addEventListener('DOMContentLoaded', function () {
    // Login form validation
    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('email');
    const loginPassword = document.getElementById('password');

    loginForm.addEventListener('submit', function (e) {
        if (!validateEmail(loginEmail.value)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        }

        if (loginPassword.value.length < 6) {
            alert('Password must be at least 6 characters long.');
            e.preventDefault();
        }
    });

    // Signup form validation
    const signupForm = document.getElementById('signupForm');
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');
    const confirmPassword = document.getElementById('confirmPassword');

    signupForm.addEventListener('submit', function (e) {
        if (!validateEmail(signupEmail.value)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        }

        if (signupPassword.value.length < 6) {
            alert('Password must be at least 6 characters long.');
            e.preventDefault();
        }

        if (signupPassword.value !== confirmPassword.value) {
            alert('Passwords do not match.');
            e.preventDefault();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

function showLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

function showSignup() {
    document.getElementById('signupModal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.className.includes('modal')) {
        event.target.style.display = 'none';
    }
}

// job status
document.querySelector('.modal-container').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the click from reaching the modal-wrapper
});

document.querySelector('.modal-wrapper').addEventListener('click', function(event) {
    if (event.target === this) {
        // Close the modal or handle outside click
    }
});

// Redirect to appropriate app
function redirectToApp(appType) {
    if (appType === 'dating') {
        window.location.href = 'http://www.dating.com'; // Replace with your dating app URL
    } else if (appType === 'matrimony') {
        window.location.href = 'http://www.matrimonyapp.com'; // Replace with your matrimony app URL
    }
}