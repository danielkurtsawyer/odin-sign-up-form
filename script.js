const passwordInputs = document.querySelectorAll(".error");
const passwordMessage = document.querySelector(".error-message");

passwordInputs.forEach(input => input.addEventListener('blur', validatePasswordMatches));

const passwordElements = {...passwordInputs};

function validatePasswordMatches(e){
    if(passwordElements[0].value === passwordElements[1].value && passwordElements[0].value !== ''){
        passwordInputs.forEach(input => input.classList.remove('error'));
        passwordMessage.style.display = "none";
    }
    else{
        passwordInputs.forEach(input => input.classList.add('error'));
        passwordMessage.style.display = "inline";
    }
}