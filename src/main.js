// Este es el punto de entrada de tu aplicacion
import {
  myFunction, registerFirebase, signInFirebase, googleProvider,
} from './lib/index.js';

import { login } from './lib/views/templateLogin.js';
import { register } from './lib/views/templateRegister.js';
import { changeRoute } from './lib/router.js';
// import { feed } from './lib/views/templateFeed.js';
// import { publicar } from './lib/firebase-firestore.js';
// import { post } from './lib/views/templatePost.js';


const generateLoginListener = () => {
  // id formulario inicio de sesión
  const signInForm = document.querySelector('#login-form');
  // id boton inicio sesión con Google
  const loginGoogle = document.querySelector('#login-google');

  if (signInForm) {
    signInForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Para cancelar el evento del reinicio del formulario
      const email = document.querySelector('#login-email').value;
      const password = document.querySelector('#login-password').value;
      signInFirebase(email, password);
      // publicar();
      // Limpiar el form
      signInForm.reset();
    });
  }

  if (loginGoogle) {
    loginGoogle.addEventListener('click', () => {
      googleProvider();
    });
  }
};

const generateRegisterListener = () => {
  const signupForm = document.querySelector('#signup-form');
  // id formulario de registro
  const btnRegister = document.getElementById('btn-register');
  if (btnRegister) {
    btnRegister.addEventListener('click', (event) => {
      event.preventDefault(); // para cancelar el evento del reinicio del formulario
      // const signupUserName = document.querySelector('#singup-username').value;
      const signupEmail = document.querySelector('#signup-email').value;
      const signupPassword = document.querySelector('#signup-password').value;
      // const signupPassword2 = document.querySelector('#signup-password2').value;
      registerFirebase(signupEmail, signupPassword);
      // Limpiar el form
      signupForm.reset();
    });
  }
};

const init = () => {
  document.getElementById('root').innerHTML = login();
  generateLoginListener();
  window.addEventListener('hashchange', () => {
    document.getElementById('root').innerHTML = register();
    myFunction();
    changeRoute(window.location.hash);
    generateRegisterListener();
  });
};

window.addEventListener('load', init);
