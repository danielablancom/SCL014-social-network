import { login } from './views/templateLogin.js';
import { register } from './views/templateRegister.js';
import { feed } from './templateFeed.js';
import { post } from './views/templatePost.js';


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
    case '#/feed':
      containerRoot.appendChild(feed());
      break;
    case '#/post':
      containerRoot.appendChild(post());
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
  } if (hash === '#/feed') {
    return showTemplate(hash);
  } if (hash === '#/post') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
