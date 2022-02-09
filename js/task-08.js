const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, onSubmit);
function onSubmit(event) {
    event.preventDefault()
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if (!email || !password) {
        return alert("Заполните поля");
    }
    const Obj = { email, password };
    console.log(Obj);
    form.reset();
};
