/* eslint-disable no-console */
import { login } from './views/templateLogin.js';
import { register } from './views/templateRegister.js';

const showTemplate = (hash) => {
  console.log('esta en show');
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/login':
      console.log('Pagina de inicio');
      containerRoot.appendChild(login());
      break;
    case '#/register':
      containerRoot.appendChild(register());
      break;
    default:
      containerRoot.innerHTML = '<h2>Error</h2>';
  }
};

export const changeRoute = (hash) => {
  if (hash === '#/login') {
    console.log('hash login');
    return showTemplate(hash);
  } if (hash === '#/register') {
    console.log('hash register');
    return showTemplate(hash);
  }
  console.log('hash undefined');
  return showTemplate(hash);
};
