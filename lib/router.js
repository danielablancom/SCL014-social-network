import { login } from './views/templateLogin.js';
import { register } from './views/templateRegister.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/login':
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
    return showTemplate(hash);
  } if (hash === '#/register') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
