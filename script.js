const form = document.getElementsById('form');
const username = document.getElementsById('username');
const email = document.getElementsById('email');
const password = document.getElementsById('password');
const password2 = document.getElementsById('password2');

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSucess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control sucess';

   
}
// Event listeners

form.addEventListener('sibmit' , function(e)  {
    e.preventDefault();

    if(username.value ==''){
        showError(username,'username is required');
    }else{
        showSucess(username);
    }

    if(email.value ==''){
        showError(email,'Email is required');
    }else{
        showSucess(email);
    }

    if(password.value ==''){
        showError(password,'password is required');
    }else{
        showSucess(password);
    }

    if(password2.value ==''){
        showError(password2,'password2 is required');
    }else{
        showSucess(password2);
    }

});