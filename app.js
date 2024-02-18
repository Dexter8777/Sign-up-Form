confirmPassword = document.getElementById('confirmPassword');
password = document.getElementById('password');

password.classList.toggle('error');
confirmPassword.classList.toggle('error');

function matchPassword(confirmPassword, password) {
    if (password !== confirmPassword) {
        password.classList.toggle('error');
        confirmPassword.classList.toggle('error');
    } else {
        return;
    }
}

