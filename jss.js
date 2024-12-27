function registor(){
    window.open("reg.html")
}
function apply(){
    window.open("pay.html")
}
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    let isValid = true;
    // Validate Full Name
    const name = document.getElementById('name').value.trim();
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long.';
        isValid = false;
    }
    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }
    // Validate Password
    const password = document.getElementById('password').value.trim();
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }
    // Confirm Password Match
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }
    // Validate Phone Number
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
        isValid = false;
    }
    if (isValid) {
        alert('Registration successful!');
        this.reset(); // Clear form after successful validation
    }
});