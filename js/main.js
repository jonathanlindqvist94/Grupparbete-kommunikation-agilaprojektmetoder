// button.addEventListener('click', checkPassword = (event) => {
//     const password = document.querySelector('.password').value;
//     const confirmPassword = document.querySelector('.confirm-password').value;
//     const msg = document.querySelector('.message');


//     if(password.length != 0) {
//         if(password === confirmPassword) {
//             msg.textContent = "passwords Match!";
//             msg.style.backgroundColor = "#3ae374";
//             msg.style.padding = ".5em 1.5em";
//         } else {
//             msg.textContent = "Passwords don't match!";
//             msg.style.backgroundColor = "#ff4d4d";
//             msg.style.padding = ".5em 1.5em";
//             event.preventDefault();
//         }
//     } else {
//         alert("Password can't be empty");
//         msg.textContent = "";
//         msg.style.padding = "0";

//         event.preventDefault();
//     }
// });

const button = document.querySelector('.btn-main');

button.addEventListener('click', checkPassword = (event) => {
    const password = document.querySelector('.password').value;
    const confirmPassword = document.querySelector('.confirm-password').value;
    const msg = document.querySelector('.message');

    if (!password.length) {
        alert("Password can't be empty");
        msg.textContent = "";
        msg.style.padding = "0";
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        msg.textContent = "Passwords don't match!";
        msg.style.backgroundColor = "#ff4d4d";
        msg.style.padding = ".5em 1.5em";
        event.preventDefault();
        return;
    }

    msg.textContent = "passwords Match!";
    msg.style.backgroundColor = "#3ae374";
    msg.style.padding = ".5em 1.5em";
});
