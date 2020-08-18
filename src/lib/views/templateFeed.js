import { readData, orderPublish } from '../firebase-firestore.js';

export const feed = () => {
  const divFeed = document.createElement('div');
  const viewFeed = `
  <header>
    <div class="container-logo">
      <i class="fas fa-chevron-left flecha"></i>
      <img class="logo-header" src="./img/iconos/LOGO.jpg">
    </div>
    <div class="container-icon">
      <a href="#/post" id="go-form-recipe"><i class="fas fa-plus icon-feed"></i></a>
      <i class="fas fa-search icon-feed"></i>
      <i class="fas fa-user icon-feed"></i>
      <i class="fas fa-filter icon-feed"></i>
    </div>
  </header>
  <section>
    <div class="imagesFeed">
      <img class="images" src="./img/Img-recetas/rapido-y-facil.jpg" alt="">
      <img class="images" src="./img/Img-recetas/comida-saludable.jpg" alt="">
      <img class="images" src="./img/Img-recetas/comida-vegana.jpg" alt="">
    </div>
    <div class="btn-feed">
      <button class="btn">Rápido y facil</button>
      <button class="btn">Saludable</button>
      <button class="btn">Vegano</button>
    </div>

    <div class="PostRec">
      <h2>| Publicaciones recientes</h2>
    </div>

    <div id="container-feed">
    </div>

  </section> `;
  readData();
  // orderPublish();

  divFeed.innerHTML = viewFeed;
  return divFeed;
};
