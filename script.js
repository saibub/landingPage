const regex_name = /^$|^[A-Za-z\s]+$/;
const regex_email = /^$|^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const regex_phoneNumber = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

function getPattern(inputId) {
    if (inputId == "email") {
        pattern = regex_email;
        errorMsg = "Incorrect Email";
    } else if (inputId == "phoneNumber") {
        pattern = regex_phoneNumber;
        errorMsg = "Incorrect Number";
    } else if (inputId == "city") {
        pattern = regex_name;
        errorMsg = "Incorect city name";
    } else if (inputId == "fname") {
        pattern = regex_name;
        errorMsg = "Incorrect Name";
    }
}

function validateInput(e) {
    const inputId = e.id;
    const element = document.getElementById(inputId)
    const value = element.value;
    getPattern(inputId);

    if (!pattern.test(value)) {
        alert(errorMsg);
        element.classList.add("error");
    } else {
        element.classList.remove("error");
    }
}