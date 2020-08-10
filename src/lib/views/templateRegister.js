/* eslint-disable max-len */
export const register = () => {
  const divRegister = document.createElement('div');
  const viewRegister = `
  <form id="signup-form" class="formulario">
    <a href="#/login">
      <i id="arrow" class="fas fa-chevron-left"></i>
    </a>
    <div>
      <img class="logo" src="./img/iconos/LOGO.jpg">
    </div>
    <h1>EASYCOOK</h1>
    <div class="contenedor">
      <p>Regístrate con tu E-mail:</p>
      <div class="input-contenedor">
        <i class="fas fa-user icon"></i>
        <input type="text" id="singup-username" placeholder="Nombre de usuario" value="" required>
      </div>
      <div class="input-contenedor">
        <i class="fas fa-envelope icon"></i>
        <input type="email" id="signup-email" autocomplete="on" placeholder="E-mail" value="" required>
      </div>
      <div class="input-contenedor">
        <i class="fas fa-key icon"></i>
        <input type="password" id="signup-password" placeholder="Contraseña"
          oninvalid="setCustomValidity('Tu contraseña debe tener min. 6 caracteres')" value="" required>
      </div>
      <div class="input-contenedor">
        <i class="fas fa-key icon"></i>
        <input type="password" id="signup-password2" placeholder="Confirma tu contraseña" value="" required>
      </div>
      <div class="input-contenedor">
        <!-- a href no funciona porque está dentro del form -->
        <input id="btn-register" type="submit" value="Registrarse" class="button">
      </div>
    </div>
  </form>
    `;
  divRegister.innerHTML = viewRegister;
  return divRegister;
};
