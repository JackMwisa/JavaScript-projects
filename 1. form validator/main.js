const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

//show success 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// Event listeners

form.addEventListener('submit', function(e){
    e.preventDefault();

    // console.log(username.value);

    if (username.value === ""){
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }
})