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
      // E-mail de verificación
      const user = auth.currentUser;
      user.sendEmailVerification().then(() => {
        // Correo electrónico enviado.
        alert('Se envio un mensaje a tu correo electronico');
      })
        .catch((_error) => {
          alert('ocurrio un problema');
        });
      signupForm.reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/email-already-in-use') {
        alert('El e-mail ya se encuentra registrado');
      } else if (errorCode == 'auth/invalid-emai') {
        alert('El formato del e-mail no es válido');
      } else if (errorCode == 'auth/weak-password') {
        alert('La contraseña debe tener minimo 6 caracteres');
      } else {
        alert(errorMessage);
      }
    });
});

/* firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    firebaseUser.sendEmailVerification().then(() => {
      // Email sent.
      alert('Se envio un mensaje a tu correo electrónico');
    },(error) => {
      // An error happened.
      alert('ocurrio un problema');
    })
  } else {

}); */

// Signin
const signInForm = document.querySelector('#login-form');
signInForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Para cancelar el evento del reinicio del formulario
  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('shao');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/wrong-password') {
        alert('La contraseña es incorrecta');
      } else if (errorCode == 'auth/user-not-found') {
        alert('El usuario es incorrecto o no esta registrado');
      } else {
        alert(errorMessage);
      }
    });
  // Limpiar el form
  signInForm.reset();
});
