// aqui exportaras las funciones que necesites

/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// aqui exportaras las funciones que necesites
export const myFunction = () => {
};
// SingUp
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // para cancelar el evento del reinicio del formulario
  const signupUserName = document.querySelector('#singup-username').value;
  const signupEmail = document.querySelector('#signup-email').value;
  const signupPassword = document.querySelector('#signup-password').value;
  const signupPassword2 = document.querySelector('#signup-password2').value;
  auth
    .createUserWithEmailAndPassword(signupEmail, signupPassword)
    .then((userCredential) => {
    });
});
// Signin
const signInForm = document.querySelector('#login-form');
signInForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Para cancelar el evento del reinicio del formulario
  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Limpiar el form
      signupForm.reset();
      console.log('shao');
    });
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
  // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode == 'auth/wrong-password') {
      alert('La contraseña es incorrecta');
    } else if (errorCode == 'auth/user-not-found') {
      alert('El usuario es incorrecto');
    } else {
      alert(errorMessage);
    }
  });
});