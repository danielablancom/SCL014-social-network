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
  <form>
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
        <button class="btn" type="submit" id="btn-publish"><strong>Publicar</strong></button>
      </div>
    </div>
  </form>`;

  divPost.innerHTML = viewPost;
  return divPost;
};

export const postEvent = () => {
  post();
  document.getElementById('btn-publish').addEventListener('submit', () => {
    const title = document.querySelector('#title-rct').value;
    console.log(title);
    const diners = document.querySelector('#comensales').value;
    const timePreparation = document.querySelector('#time-rct').value;
    const steps = document.querySelector('#steps').value;
    const ingredients = document.querySelector('#ingredient').value;
    publicar(title, diners, timePreparation, steps, ingredients);
  });
};
