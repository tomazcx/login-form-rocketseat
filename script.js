const icons = document.querySelectorAll(".inputWithIcon img");
const divInput = document.querySelectorAll(".inputWithIcon");
const inputs = document.querySelectorAll(".inputWithIcon input");

console.log(divInput);

inputs[0].addEventListener('focus', function() {
    icons[0].setAttribute('src', 'img/mail-focus.svg');
    divInput[0].style.border = "2px solid #FFC632";
})

inputs[0].addEventListener('focusout', function() {
    icons[0].setAttribute('src', 'img/mail.svg');
    divInput[0].style.border = "1px solid #A9AFB9";
})

inputs[1].addEventListener('focus', function() {
    icons[1].setAttribute('src', 'img/lock-focus.svg');
    divInput[1].style.border = "2px solid #FFC632";
})

inputs[1].addEventListener('focusout', function() {
    icons[1].setAttribute('src', 'img/lock.svg');
    divInput[1].style.border = "1px solid #A9AFB9";
})

icons[2].addEventListener("click", function() {
    if (inputs[1].attributes[0].value === "password") {
        return inputs[1].setAttribute("type", "text");
    }
    return inputs[1].setAttribute("type", "password");


})