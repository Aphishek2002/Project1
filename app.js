document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Fetch form elements
    var usernameInput = document.getElementById('username');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    // Check if fields are not empty
    if (usernameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Add additional validation logic if needed

    // If all validation passes, you can submit the form or perform other actions
    console.log('Signup form submitted');
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Fetch form elements
    var loginUsernameInput = document.getElementById('loginUsername');
    var loginPasswordInput = document.getElementById('loginPassword');

    // Check if fields are not empty
    if (loginUsernameInput.value.trim() === '' || loginPasswordInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Add additional validation logic if needed

    // If all validation passes, you can submit the form or perform other actions
    console.log('Login form submitted');
});
