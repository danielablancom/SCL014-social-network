/* eslint-disable no-plusplus */
// Este es el punto de entrada de tu aplicacion
import {
  myFunction, registerFirebase, signInFirebase, googleProvider,
} from './lib/index.js';

import { login } from './lib/views/templateLogin.js';
import { register } from './lib/views/templateRegister.js';
import { changeRoute } from './lib/router.js';

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

// CARROUSEL DE IMAGENES

const imagenes = ['./img/Img-recetas/1.jpg', './img/Img-recetas/2.jpg', './img/Img-recetas/3.jpg', './img/Img-recetas/4.jpg', './img/Img-recetas/5.jpg'];
let cont = 0;

function carrousel(contenedor) {
  contenedor.addEventListener('click', (e) => {
    const atras = contenedor.querySelector('.atras');
    const adelante = contenedor.querySelector('.adelante');
    const img = contenedor.querySelector('.img');
    const tgt = e.target;

    if (tgt === atras) {
      if (cont > 0) {
        img.src = imagenes[cont - 1];
        cont--;
      } else {
        img.src = imagenes[imagenes.length - 1];
        cont = imagenes.length - 1;
      }
    } else if (tgt === adelante) {
      if (cont < imagenes.length - 1) {
        img.src = imagenes[cont + 1];
        cont++;
      } else {
        img.src = imagenes[0];
        cont = 0;
      }
    }
  });
}
document.addEventListener('DOMcontentLoaded', () => {
  const contenedor = document.querySelector('.contenedor-carrousel');
  carrousel(contenedor);
});

contenedor();

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
