function getFormValues() {
    const usernameField = document.querySelector("input[name='username']");
    const passwordField = document.querySelector("input[name='password']");
    return {
        username: usernameField.value,
        password: passwordField.value
    };
}

function verifyCredentials(user) {
    return require('./getuser').verifyCredentials(user);
}

function onLoginButtonClick() {
    const formValues = getFormValues();

    verifyCredentials(formValues).then(() => {
        // Redireccionar al usuario
        window.location.href = ('./vistas/home');
    }, (error) => {
        // Las credenciales no son válidas
        alert("Invalid username or password");
    });
}

loginb.addEventListener("click", onLoginButtonClick);
