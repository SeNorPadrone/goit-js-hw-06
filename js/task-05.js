const input = document.querySelector('#name-input');
input.addEventListener("input", function (event) {
    span.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        span.textContent = "Anonymous";
    }
});
const span = document.querySelector('#name-output');


