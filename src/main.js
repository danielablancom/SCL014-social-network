// Este es el punto de entrada de tu aplicacion
import {
  myFunction, registerFirebase, SignInFirebase, googleProvider,
} from './lib/index.js';

import { login } from './lib/views/templateLogin.js';
import { register } from './lib/views/templateRegister.js';
import { changeRoute } from './lib/router.js';
// import { user } from './lib/firebase-firestore.js';

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
      SignInFirebase(email, password);
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
      // btnRegister.reset();
    });
  }
};

const db = firebase.firestore();

const user = () => {
  db.collection('users').add({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

const generateRecipeListener = () => {
  const taskRecipe = document.getElementById('btn-publish');

  const saveTask = (title,
    diners,
    timePreparation,
    steps,
    ingredients) => db.collection('tasks').set({
    title,
    diners,
    timePreparation,
    steps,
    ingredients,
  });
  console.log(title, ingredients);


  taskRecipe.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.querySelector('#title-rct').value;
    const diners = document.querySelector('#comensales').value;
    const timePreparation = document.querySelector('#time-rct').value;
    const steps = document.querySelector('#steps').value;
    const ingredients = document.querySelector('#ingredient').value;


    user();
  });

  const init = () => {
    document.getElementById('root').innerHTML = login();
    generateLoginListener();
    window.addEventListener('hashchange', () => {
      document.getElementById('root').innerHTML = register();
      myFunction();
      changeRoute(window.location.hash);
      generateRegisterListener();
      generateRecipeListener();
    });
  };

  window.addEventListener('load', init);
};
