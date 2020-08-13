import { publicar } from '../firebase-firestore.js';

export const post = () => {
  const divPost = document.createElement('div');
  const viewPost = `
  <header>
    <div class="container-logo">
      <i class="fas fa-chevron-left flecha"></i>
      <img class="logo-header" src="./img/iconos/LOGO.jpg">
    </div>
    <div class="container-icon">
      <a href="#/post"><i class="fas fa-plus icon-feed"></i></a>
      <i class="fas fa-search icon-feed"></i>
      <i class="fas fa-user icon-feed"></i>
      <i class="fas fa-filter icon-feed"></i>
    </div>
  </header>
  <form id="post-form">
    <div class="Container-camera">
      <i class="fa fa-camera camera" aria-hidden="true"></i>
      <p>Sube foto de tu propia receta <br> Inspira a otros con tus ideas</p>
    </div>
    <div class="container-recipe">
      <div class="ctn-rct">
        <input id="title-rct" class="ctn-receta2" type="text" placeholder="Ej: Brócoli gratinado" value=""><br>
        <label>Comensales<input id="comensales" class="ctn-receta3" type="text" placeholder="Ej: 2 personas"
            value=""></label><br>
        <label>Tiempo de preparación<input id="time-rct" class="ctn-receta" type="text" placeholder="Ej: 15 minutos"
            value=""></label>
      </div>
      <div class="ctn-rct">
        <h5>INGREDIENTES:</h5>
        <input id="ingredient" class="ctn-receta2" type="text" placeholder="Ej: 1 rama de brócoli de unos 600gr."
          value="">
        <input class="clear" id="clear" type="button" title="Borrar texto" value="X">
        <input class="ctn-receta2" type="text" placeholder="Ej: 3 cucharadas de aceite de oliva">
        <input class="clear" id="clear1" type="button" title="Borrar texto" value="X">
        <div class="add">
          <i class="fas fa-plus icon-feed"></i>
          <label>Ingredientes.</label>
        </div>
      </div>
      <div class="ctn-rct">
        <h5>PASO A PASO:</h5>
        <input id="steps" class="ctn-receta2" type="text" placeholder="Ej:Cocemos el brocoli al vapor 3 ó 4 min.
          Lo separamos en arbolitos." value="">
        <input class="clear" id="clear2" type="button" title="Borrar texto" value="X">
        <div class="add">
          <i class="fas fa-plus icon-feed"></i>
          <label>Paso a paso.</label>
        </div>
      </div>
      <div class="btn-feed">
        <button href="#/feed" class="btn" type="submit" id="btn-publish"><strong>Publicar</strong></button>
      </div>
    </div>
  </form>`;

  divPost.innerHTML = viewPost;

  const form = divPost.querySelector('#post-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = form.querySelector('#title-rct').value;
    const diners = form.querySelector('#comensales').value;
    const timePreparation = form.querySelector('#time-rct').value;
    const steps = form.querySelector('#steps').value;
    const ingredients = form.querySelector('#ingredient').value;

    publicar(title, diners, timePreparation, steps, ingredients);
    form.reset();
  });

  // Borrar valores del input ingredientes.
  const clear = divPost.querySelector('#clear');
  clear.addEventListener('click', () => {
    const btnClear = () => {
      form.querySelector('#ingredient').value = '';
    };
    return btnClear();
  });
  return divPost;
};
