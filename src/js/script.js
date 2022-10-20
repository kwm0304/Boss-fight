//Const
const primaryColor = `rgb(86, 124, 228)`;


// Form Const
const loginForm = document.querySelector(`.login-form`);

// Inputs Const
const username = document.querySelector(`#input-username`);
const usernameLabel = document.querySelector(`#username-label`);
const checkIcon = document.querySelector(`.fa-circle-check`);


const email = document.querySelector(`#input-email`);
const emailLabel = document.querySelector(`#email-label`);
const validationIcon = document.querySelector(`.fa-circle-xmark`)

const pswd = document.querySelector(`#input-pswd`);
const pswdLabel = document.querySelector(`#pswd-label`);
const eyeIconLogin = document.getElementById(`eye-pswd_login`);
const eyeIconRegister = document.getElementById(`eye-pswd_register`);

const pswdLogin = document.querySelector(`.input-pswd_login`)


// Btns Const
const signInBtn = document.querySelector(`.sign-in_btn`);
const registerBtn = document.querySelector(`.register_btn`);


// Check Email Characters Const
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// Sign In & Register Const
const signIn = document.querySelector(`.sign-in`);
const signInForm = document.querySelector(`.login-form`)

const register = document.querySelector(`.register`)
const registerForm = document.querySelector(`.register-form`);

// Events Listeners
eventListener();
function eventListener() {
    // Disable Sign In Btn
    document.addEventListener(`DOMContentLoaded`, disableBtn);

    // Inputs Fields Validations
    username.addEventListener(`blur`, formValidationUsername);
    email.addEventListener(`blur`, formValidationEmail);
    pswd.addEventListener(`blur`, formValidationPswd);
}

// Event Listener Changing Login & Register
signIn.onclick = () => {
    registerForm.style.display = `none`;
    register.style.color = `white`;

    signInForm.style.display = `block`;
    signIn.style.color = primaryColor;
}

register.onclick = () => {
    registerForm.style.display = `block`;
    register.style.color = primaryColor;

    signInForm.style.display = `none`;
    signIn.style.color = `white`;
}

// Functions
function disableBtn() { 

    registerBtn.disabled = true;
    registerBtn.style.cursor = `not-allowed`;
    registerBtn.style.backgroundColor = `rgb(122, 153, 238)`;
 };


// Form Validation
function formValidationUsername(e){
    if(e.target.value.length > 0) {

        e.target.style.borderColor = `#4461F2`;
        usernameLabel.style.color = `#4461F2`;
        checkIcon.style.color = `#63D399`;

        enableBtn();
    } else {

        e.target.style.borderColor = `#F23501`;
        usernameLabel.style.color = `#F23501`;
        checkIcon.style.color = `#F23501`;
    };
};

function formValidationEmail(e){

    if(e.target.value.length > 0) {

        if (e.target.type === `text`) {
            if(er.test(e.target.value)) {
                e.target.style.borderColor = `#4461F2`;
                emailLabel.style.color = `#4461F2`;
                validationIcon.style.color = `#63D399`;

                enableBtn();
            }
        }
    } else {

        e.target.style.borderColor = `#F23501`;
        emailLabel.style.color = `#F23501`;
        validationIcon.style.color = `#F23501`;
    };
};


function formValidationPswd(e) {
    if(e.target.value.length > 8) {

        e.target.style.borderColor = `#4461F2`;
        pswdLabel.style.color = `#4461F2`;
        eyeIconRegister.style.color = `#63D399`;

        enableBtn();
    } else {

        e.target.style.borderColor = `#F23501`;
        pswdLabel.style.color = `#F23501`;
        eyeIconRegister.style.color = `#F23501`;
    };
};

function enableBtn() {
    if(er.test(email.value) && pswd.value !== ``) {
        registerBtn.disabled = false;
        registerBtn.style.cursor = `pointer`;
        registerBtn.style.backgroundColor = primaryColor;
    }
};

eyeIconRegister.onclick = () => {
    if(pswd.type === `password`) {
        pswd.setAttribute(`type`, `text`);
        eyeIconRegister.classList.remove(`fa-eye`);
        eyeIconRegister.classList.add(`fa-eye-slash`);
    }else {
        pswd.setAttribute(`type`, `password`);
        eyeIconRegister.classList.remove(`fa-eye-slash`);
        eyeIconRegister.classList.add(`fa-eye`);
    };
};

eyeIconLogin.onclick = () => {
    if(pswdLogin.type === `password`) {
        pswdLogin.setAttribute(`type`, `text`);
        eyeIconLogin.classList.remove(`fa-eye`);
        eyeIconLogin.classList.add(`fa-eye-slash`);
    }else {
        pswdLogin.setAttribute(`type`, `password`);
        eyeIconLogin.classList.remove(`fa-eye-slash`);
        eyeIconLogin.classList.add(`fa-eye`);
    };
};