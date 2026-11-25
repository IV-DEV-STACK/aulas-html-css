const form = document.querySelector("#registration-form");
const successMessage = document.querySelector("#form-success");
const successName = document.querySelector("#success-name");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
        return;
    }

    successName.textContent = form.elements.nome.value.trim();
    successMessage.hidden = false;
    successMessage.focus();
});
