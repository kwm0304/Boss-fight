//Const
// Form Const
const loginForm = document.querySelector(`.login-form`);

// Inputs Const
const email = document.querySelector(`#input-email`);
const emailLabel = document.querySelector(`#email-label`);
const validationIcon = document.querySelector(`.fa-circle-xmark`)

const pswd = document.querySelector(`#input-pswd`);
const pswdLabel = document.querySelector(`#pswd-label`);
const eyeIcon = document.querySelector(`.fa-eye`);

// Btns Const
const signInBtn = document.querySelector(`.sign-in_btn`);


// Check Email Characters Const
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// Events Listeners
eventListener();
function eventListener() {
    // Disable Sign In Btn
    document.addEventListener(`DOMContentLoaded`, disableBtn);

    // Inputs Fields Validations
    email.addEventListener(`blur`, formValidationEmail);
    pswd.addEventListener(`blur`, formValidationPswd);
}

// Functions
function disableBtn() { 
    signInBtn.disabled = true;
    signInBtn.style.cursor = `not-allowed`;
    signInBtn.style.backgroundColor = `#5d71d2`;
 };


// Form Validation
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
        eyeIcon.style.color = `white`;

        enableBtn();
    } else {

        e.target.style.borderColor = `#F23501`;
        pswdLabel.style.color = `#F23501`;
        eyeIcon.style.color = `#F23501`;
    };

    eyeIcon.onclick = () => {
        if(pswd.type === `password`) {
            pswd.setAttribute(`type`, `text`);
            eyeIcon.classList.remove(`fa-eye`);
            eyeIcon.classList.add(`fa-eye-slash`);
        }else {
            pswd.setAttribute(`type`, `password`);
            eyeIcon.classList.remove(`fa-eye-slash`);
            eyeIcon.classList.add(`fa-eye`);
        };
    };
};

function enableBtn() {
    if(er.test(email.value) && pswd.value !== ``) {
        signInBtn.disabled = false;
        signInBtn.style.cursor = `pointer`;
        signInBtn.style.backgroundColor = `#4461F2`;
    }
};