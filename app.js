password = document.getElementById('password');
confirmPassword = document.getElementById('confirmPassword');

password.classList.toggle('error');
confirmPassword.classList.toggle('error');

confirmPassword.addEventListener('focusout', ()=>{
    if (password.value != confirmPassword.value){
        password.classList.toggle('error');
        confirmPassword.classList.toggle('error');  
    }
})
