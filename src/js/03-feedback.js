import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
let dataForm = {
    email: '',
    message: '',
}

if (localStorage.getItem("feedback-form-state")) {
    dataForm = JSON.parse(localStorage.getItem("feedback-form-state"));
}

form.querySelector('[name="email"]').value = dataForm.email;
form.querySelector('[name="message"]').value = dataForm.message;

form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

function onInputForm(evt) {
    dataForm[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(dataForm));
}

function onSubmitForm(evt) {
    evt.preventDefault();

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));

    localStorage.clear();
    evt.target.reset();
    dataForm.email = '';
    dataForm.message = '';
}