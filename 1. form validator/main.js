const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check valid email
function checkEmail(input) {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }

}


function checkRequired(){

    inputs.forEach(function (input) {
            if (input.value === '') {
                showError(input, `${getFieldName(input)} is required`);
            } else {
                showSuccess(input);
            }
        })
    
}



// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();


    const inputs = [username, email, password, password2];

    checkRequired(inputs)


});

 