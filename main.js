// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { login } from './lib/views/templateLogin.js';
import { register } from './lib/views/templateRegister.js';
import { changeRoute } from './lib/router.js';

// myFunction();
// document.getElementById('root').innerHTML = login();
// // document.getElementById('root').appenChild(login());


const init = () => {
  document.getElementById('root').innerHTML = login();
  window.addEventListener('hashchange', () => {
    document.getElementById('root').innerHTML = register();
    myFunction();
    changeRoute(window.location.hash);
  });
};

window.addEventListener('load', init);


/* const btnRegister = login().querySelector('#btn-register');
btnRegister.addEventListener('click', () => {
  changeRoute('#/register');
}); */
