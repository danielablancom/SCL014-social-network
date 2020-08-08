

export const login = () => {
  const divLogin = document.createElement('div');
  const viewLogin = `<div class="contenedor">
    <form id="login-form" class="formulario">
      <div>
        <img class="logo" src="./img/iconos/LOGO.jpg">
      </div>
      <h1>EASYCOOK</h1>
      <div class="">
        <p>Inicia sesión:</p>
        <div class="input-contenedor">
          <i class="fas fa-envelope icon"></i>
          <input type="email" id="login-email" placeholder="E-mail">
        </div>
        <div class="input-contenedor">
          <i class="fas fa-key icon"></i>
          <input type="password" id="login- password" placeholder="Contraseña">
        </div>
        <div class="input-contenedor">
          <a href="#/feed"><input type="submit" value="Entrar" class="button"></a>
        </div>
      </div>
    </form>
    <div class="formulario-2">
      <div class="input-contenedor-google">
        <i class="fab fa-google icon"></i>
        <button id="login-google" class="btn-google">Inicia sesión con Google</button>
      </div>
      <div>
        <p>¿No tienes cuenta?</p>
        <a id="btn-register" href="#/register"><button class="check-in">Regístrate aqui</button></a>
      </div>
    </div>
  </div>`;

  divLogin.innerHTML = viewLogin;

  return viewLogin;
};

/* const singUpForm2 = divLogin.querySelector('#signup-form');
  singUpForm2.addEventListener('click', () => {
    SingUpForm();
  }); */

// const loginG = divLogin.querySelector('#login-google');
// loginG.addEventListener('click', () => {
// loginGoogle();
// });

/* const showMainPotterCharacters = (data) => {
  let templatePotter = '';
  data.forEach((obj) => {
    templatePotter += `
    <div class="card">
      <div class="card-inside">
        <div class="card-front"> */
