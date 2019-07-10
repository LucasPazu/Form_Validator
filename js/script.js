function validate() {
    // DOM elements
    const formElements = document.querySelectorAll('.custom-input');
    const name = document.querySelector('#form-name');
    const surname = document.querySelector('#form-surname');
    const birthDate = document.querySelector('#form-birth-date');
    const phoneNumber = document.querySelector('#form-phone-number');
    const email = document.querySelector('#form-email');
    const postCode = document.querySelector('#form-post-code');
    const province = document.querySelector('#form-provice');

    // Validation before send
    let valid = true;

    checkTextInput(name);
    checkTextInput(surname);
    //checkBirthDate(birthDate);
    checkPhoneNumber(phoneNumber);
    checkEmail(email);
    checkPostCode(postCode);
    checkTextInput(province);
    //console.log(birthDate.value);

    function checkTextInput(element) {
        if(element.value === '') {
            element.classList.add('custom-wrong-input');
            valid = false;
        }
        else {
            element.classList.remove('custom-wrong-input');
        }
    }

    function checkBirthDate(element){
        const regex = /^\d{4}\-\d{2}\-d{2}$/
        if(isValidDate(element.value)) {
            element.classList.add('custom-wrong-input');
            valid = false;
        }
        else {
            element.classList.remove('custom-wrong-input');
        }
    }

    function checkPhoneNumber(element) {
        if(element.value.match(/^\d{9}$/) == null) {
            element.classList.add('custom-wrong-input');
            valid = false;
        }
        else {
            element.classList.remove('custom-wrong-input');
        }
    }

    function checkEmail(element) {
        if(element.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) == null) {
            element.classList.add('custom-wrong-input');
            valid = false;
        }
        else {
            element.classList.remove('custom-wrong-input');
        }
    }

    function checkPostCode(element) {
        if(element.value.match(/^\d{2}\-\d{3}$/) == null) {
            element.classList.add('custom-wrong-input');
            valid = false;
        }
        else {
            element.classList.remove('custom-wrong-input');
        }
    }

    return valid;

}