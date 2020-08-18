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
          <input class="input-init" type="email" id="login-email" placeholder="E-mail">
        </div>
        <div class="input-contenedor">
          <i class="fas fa-key icon"></i>
          <input class="input-init" type="password" id="login-password" placeholder="Contraseña">
        </div>
        <div class="input-contenedor">
          <a href="#/feed"><input type="submit" value="Inicia sesión" class="button"></a>
        </div>
      </div>
    </form>
    <div class="formulario-2">
      <div class="input-contenedor-google">
      <img class="google-icon" src="./img/iconos/logo-google.png">
        <button id="login-google" class="btn-google">Inicia sesión con Google</button>
      </div>
      <div>
        <p>¿No tienes cuenta?</p>
        <a id="btn-register" href="#/register"><button class="check-in">Regístrate aquí</button></a>
      </div>
    </div>
  </div>`;

  divLogin.innerHTML = viewLogin;
  return viewLogin;
};
